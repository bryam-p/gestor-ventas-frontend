import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import * as Yup from 'yup';
import { useFormik } from 'formik'
import { postData } from "../../utils/postData";

export const RegisterScreen = () => {

    const { handleSubmit, touched, errors, getFieldProps
    } = useFormik({
        initialValues: {
            nameUser: '',
            lastName: '',
            user: '',
            pass: '',
            passRepeat: '',
        },
        onSubmit: (values) => {
            console.log(values)
            const { nameUser, lastName, user, pass } = values;
            const obj = {
                name: nameUser,
                last_name: lastName,
                rol: "User",
                state: true,
                email: user,
                password: pass
            }
            postData('http://localhost:4000/api/user', obj);
            alert('Usuario creado');
            window.location.href = '/login'
        },
        validationSchema: Yup.object({
            user: Yup.string().email('El formato no coincide').required('El correo es requerido'),
            pass: Yup.string().required("La contraseña es requerida"),
            passRepeat: Yup.string().required().oneOf([Yup.ref('pass'), null], 'La contraseña no coincide'),
        })
    });

    return (
        <div className="containerLogin">
            <div className="cont__box register__box">
                {/* <div className="cont__logo">
                    <img src={logopp} alt="logo principal" />
                </div> */}

                <div className="generalTitles">Registrarse</div>

                <form onSubmit={handleSubmit} noValidate className="content__form">

                    <div className="content__form--group">
                        <div className="content__form--input">
                            <label htmlFor="nameUser">Nombre</label>
                            <input type="text" name="nameUser" placeholder="Nombre" {...getFieldProps('nameUser')} />
                        </div>

                        <div className="content__form--input">
                            <label htmlFor="lastName">Apellido</label>
                            <input type="text" name="lastName" placeholder="Apellido" {...getFieldProps('lastName')} />
                        </div>
                    </div>

                    <div className="content__form--input">
                        <label htmlFor="user">Correo</label>
                        <input type="email" name="user" placeholder="Correo" {...getFieldProps('user')} />
                    </div>

                    {touched.user && errors.user && <span className="errors">{errors.user}</span>}

                    <div className="content__form--group">
                        <div className="content__form--input">
                            <label htmlFor="pass">Contraseña</label>
                            <input type="password" name="pass" placeholder="Contraseña" {...getFieldProps('pass')} />
                        </div>

                        <div className="content__form--input">
                            <label htmlFor="passRepeat">Repetir contraseña</label>
                            <input type="password" name="passRepeat" placeholder="Repetir contraseña" {...getFieldProps('passRepeat')} />
                        </div>
                    </div>


                    {touched.pass && errors.pass && <span className="errors">{errors.pass}</span>}
                    {touched.passRepeat && errors.passRepeat && <span className="errors">{errors.passRepeat}</span>}


                    <div className="content__form--input content__form--check">
                        <input type="checkbox" name="checkbox" />
                        <label htmlFor="pass">He leído y acepto los términos y condiciones de uso</label>
                    </div>

                    <Button type="submit">Registrarse</Button>

                    <span className="generalLinks mt-1">Ya tengo una cuenta <Link className="generalLinks linkUnderline" to="/login">Ingresar</Link></span>

                </form>
            </div>
        </div >
    )
}
