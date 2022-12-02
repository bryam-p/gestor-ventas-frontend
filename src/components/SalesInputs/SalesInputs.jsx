import React, { useEffect, useState } from 'react'
import { SaveDataButton } from './saveDataButton/SaveDataButton'
import { SendButton } from './sendButton/SendButton'
import { useFormik } from "formik"
import { Form } from 'semantic-ui-react'
import * as Yup from 'yup'

const SalesInputs = () => {
    const initialValueLC = JSON.parse(localStorage.getItem('dataExcel'));
    const dataLocalStorage = () => initialValueLC !== null ? initialValueLC : [];

    const [excelData, setExcelData] = useState(dataLocalStorage)
    const [preparedData, setPreparedData] = useState(true)

    const fileName = 'Gestior integrado'

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object({
            consecutivoPedido: Yup.string().matches(/^[a-zA-Z0-9-]*$/, "Este campo no puede tener espacios").required("Este campo es obligatorio"),
            organizacionVentas: Yup.string().matches(/^[a-zA-Z0-9-]*$/, "Este campo no puede tener espacios").required("Este campo es obligatorio"),
            documentoVentas: Yup.string().matches(/^[a-zA-Z0-9-]*$/, "Este campo no puede tener espacios").required("Este campo es obligatorio"),
            firmaInstaladoraZ6: Yup.string().matches(/^[a-zA-Z0-9-]*$/, "Este campo no puede tener espacios").required("Este campo es obligatorio"),
            BPCertificadorZ8: Yup.string().matches(/^[a-zA-Z0-9-]*$/, "Este campo no puede tener espacios").required("Este campo es obligatorio"),
            cliente: Yup.string().matches(/^[a-zA-Z0-9-]*$/, "Este campo no puede tener espacios").required("Este campo es obligatorio"),
            referenciaCL: Yup.string().matches(/^[a-zA-Z0-9-]*$/, "Este campo no puede tener espacios").required("Este campo es obligatorio"),
            grupoClientes: Yup.string().matches(/^[a-zA-Z0-9-]*$/, "Este campo no puede tener espacios").required("Este campo es obligatorio"),
            posicion: Yup.string().matches(/^[a-zA-Z0-9-]*$/, "Este campo no puede tener espacios").required("Este campo es obligatorio"),
            material: Yup.string().matches(/^[a-zA-Z0-9-]*$/, "Este campo no puede tener espacios").required("Este campo es obligatorio"),
            claseCondicion: Yup.string().matches(/^[a-zA-Z0-9-]*$/, "Este campo no puede tener espacios").required("Este campo es obligatorio"),
            contribucionMercado: Yup.string().matches(/^[a-zA-Z0-9-]*$/, "Este campo no puede tener espacios").required("Este campo es obligatorio"),
        }),
        onSubmit: (formValue, { resetForm }) => {
            setExcelData([...excelData, formValue])
            setPreparedData(false)
            resetForm()
        }
    })

    useEffect(() => {
        localStorage.setItem('dataExcel', JSON.stringify(excelData))
    }, [formik])

    const validationSchema = Yup.object().shape({
        numberOfTickets: Yup.string()
            .required('Number of tickets is required'),
        tickets: Yup.array().of(
            Yup.object().shape({
                name: Yup.string()
                    .required('Name is required'),
                email: Yup.string()
                    .email('Email is invalid')
                    .required('Email is required')
            })
        )
    });

    useEffect(() => {
        !preparedData && alert('Guardado con exito')
    }, [preparedData])

    console.log('errors', formik.errors);


    return (
        <div className="container--home">
            <div className="cont__extra">

                <h2 className="title">Gestor de ventas integrado</h2>

                <Form onSubmit={formik.handleSubmit} className="content--form">
                    <div className="cont__input">
                        <label htmlFor="">Consecutivo pedido</label>
                        <Form.Input type="text" placeholder="Consecutivo pedido" name="consecutivoPedido" onChange={formik.handleChange} value={formik.values.consecutivoPedido} error={formik.errors.consecutivoPedido} />
                    </div>

                    <div className="cont__input">
                        <label htmlFor="">Clase de documento de ventas</label>
                        <Form.Input type="text" placeholder="Clase de documento de ventas" name="documentoVentas" onChange={formik.handleChange} value={formik.values.documentoVentas} error={formik.errors.documentoVentas} />
                    </div>

                    <div className="cont__input">
                        <label htmlFor="">Organización de Ventas</label>
                        <Form.Input type="text" placeholder="Organización de Ventas" name="organizacionVentas" onChange={formik.handleChange} value={formik.values.organizacionVentas} error={formik.errors.organizacionVentas} />
                    </div>

                    <div className="cont__input">
                        <label htmlFor="">Cliente(SO, DM)</label>
                        <Form.Input type="text" placeholder="Cliente(SO, DM)" name="cliente" onChange={formik.handleChange} value={formik.values.cliente} error={formik.errors.cliente} />
                    </div>

                    <div className="cont__input">
                        <label htmlFor="">Consecutivo pedido</label>
                        <input type="text" placeholder="Firma Instaladora(Z6)" onChange={formik.handleChange} name="firmaInstaladoraZ6" value={formik.values.firmaInstaladoraZ6} error={formik.errors.firmaInstaladoraZ6} />
                    </div>

                    <div className="cont__input">
                        <label htmlFor="">BP Certificador(Z8)</label>
                        <input type="text" placeholder="BP Certificador(Z8)" onChange={formik.handleChange} name="BPCertificadorZ8" value={formik.values.BPCertificadorZ8} error={formik.errors.BPCertificadorZ8} />
                    </div>

                    <div className="cont__input">
                        <label htmlFor="">Referencia Cl</label>
                        <input type="text" placeholder="Referencia Cl" onChange={formik.handleChange} name="referenciaCL" value={formik.values.referenciaCL} error={formik.errors.referenciaCL} />
                    </div>

                    <div className="cont__input">
                        <label htmlFor="">Grupo de Clientes</label>
                        <input type="text" placeholder="Grupo de Clientes" onChange={formik.handleChange} name="grupoClientes" value={formik.values.grupoClientes} error={formik.errors.grupoClientes} />
                    </div>

                    <div className="cont__input">
                        <label htmlFor="">Posicion</label>
                        <input type="text" placeholder="Posicion" onChange={formik.handleChange} name="posicion" value={formik.values.posicion} error={formik.errors.posicion} />
                    </div>

                    <div className="cont__input">
                        <label htmlFor="">Material</label>
                        <input type="text" placeholder="Material" onChange={formik.handleChange} name="material" value={formik.values.material} error={formik.errors.material} />
                    </div>

                    <div className="cont__input">
                        <label htmlFor="">Valor</label>
                        <input type="text" placeholder="Clase de Condicion" onChange={formik.handleChange} name="claseCondicion" value={formik.values.claseCondicion} error={formik.errors.claseCondicion} />
                    </div>

                    <div className="cont__input">
                        <label htmlFor="">Contribucion Secundario</label>
                        <input type="text" placeholder="Contribucion Mercado Secundario" onChange={formik.handleChange} name="contribucionMercado" value={formik.values.contribucionMercado} error={formik.errors.contribucionMercado} />
                    </div>

                    <div className="cont__saveButtons">
                        <SendButton />
                        <SaveDataButton csvData={excelData} fileName={fileName} disabledState={preparedData} />
                    </div>
                </Form>
            </div>
        </div>
    )
}

const initialValues = () => {
    return {
        consecutivoPedido: '',
        documentoVentas: '',
        organizacionVentas: '',
        cliente: '',
        firmaInstaladoraZ6: '',
        BPCertificadorZ8: '',
        referenciaCL: '',
        grupoClientes: '',
        posicion: '',
        material: '',
        claseCondicion: '',
        contribucionMercado: '',
    }
}

export default SalesInputs