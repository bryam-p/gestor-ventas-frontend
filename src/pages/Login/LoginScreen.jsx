import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import * as Yup from 'yup';
import { useFormik } from 'formik'
import logopp from '../../assets/img/logo-pp.svg'
import { useFetch } from "../../hooks/useFetch";
import { AuthContext } from "../../auth/context/AuthContext";

export const LoginScreen = () => {

    const [userPath, setUserPath] = useState('')
    const { login } = useContext(AuthContext);

    const onLogin = () => {
        login('Bryam');
    }

    const { data, loading } = useFetch(userPath);

    console.log('userPath', userPath.length);

    const { handleSubmit, touched, errors, getFieldProps } = useFormik({
        initialValues: {
            user: '',
            pass: ''
        },
        onSubmit: (values) => {
            console.log(values)
            setUserPath(`http://localhost:4000/api/userlogin/${values.user}`);
            onLogin();
        },
        validationSchema: Yup.object({
            user: Yup.string().email('El formato no coincide').required('El correo es requerido'),
            pass: Yup.string().required("La contraseña es requerida")
        })
    });

    useEffect(() => {
        if (!loading && userPath) {
            console.log(data);
        }
    }, [loading])


    return (
        <div className="containerLogin">
            <div className="cont__box">
                <div className="cont__logo">
                    <img src={logopp} alt="logo principal" />
                </div>

                <form onSubmit={handleSubmit} noValidate className="content__form">
                    <div className="content__form--input">
                        <label htmlFor="user">Correo</label>
                        <input type="email" name="user" placeholder="Ejemplo: andres@gmail.com" {...getFieldProps('user')} />
                    </div>

                    {touched.user && errors.user && <span className="errors">{errors.user}</span>}

                    <div className="content__form--input">
                        <label htmlFor="pass">Contraseña</label>
                        <input type="password" name="pass" placeholder="Contraseña" {...getFieldProps('pass')} />
                    </div>

                    {touched.pass && errors.pass && <span className="errors">{errors.pass}</span>}

                    <Button type="submit">Ingresar</Button>

                    <span className="generalLinks mt-1">¿No tienes una cuenta? <Link className="generalLinks linkUnderline" to="/auth/register">Registrarse</Link></span>
                    <Link className="generalLinks mt-1" to="/register">¿Olvidaste tu contraseña?</Link>
                </form>

            </div>
        </div >
    )
}
