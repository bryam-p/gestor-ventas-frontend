import { Link } from "react-router-dom";
import * as Yup from 'yup';
import { useFormik } from 'formik'
import logopp from '../../assets/img/logo-pp.svg'

export const LoginScreen = () => {

    const { handleSubmit, touched, errors, getFieldProps } = useFormik({
        initialValues: {
            user: '',
            pass: ''
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: Yup.object({
            user: Yup.string().email('El formato no coincide').required('El correo es requerido'),
            pass: Yup.string().required("La contraseña es requerida")
        })
    });

    return (
        <div className="container">
            <div className="cont__box">
                <div className="cont__logo">
                    <img src={logopp} alt="logo principal" />
                </div>

                <form onSubmit={handleSubmit} noValidate className="content__form">
                    <div className="content__form--input">
                        <label htmlFor="user">Correo</label>
                        <input type="email" name="user" placeholder="Correo" {...getFieldProps('user')} />
                    </div>

                    {touched.user && errors.user && <span className="errors">{errors.user}</span>}

                    <div className="content__form--input">
                        <label htmlFor="pass">Contraseña</label>
                        <input type="password" name="pass" placeholder="Contraseña" {...getFieldProps('pass')} />
                    </div>

                    {touched.pass && errors.pass && <span className="errors">{errors.pass}</span>}

                    <button type="submit">Ingresar</button>

                    <span className="generalLinks mt-1">¿No tienes una cuenta? <Link className="generalLinks linkUnderline" to="/register">Registrarse</Link></span>
                    <Link className="generalLinks mt-1" to="/register">¿Olvidaste tu contraseña?</Link>
                </form>
            </div>
        </div >
    )
}
