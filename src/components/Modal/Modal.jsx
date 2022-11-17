import { Fragment, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
} from "@material-tailwind/react";
import * as Yup from 'yup';
import { Field, useFormik } from 'formik'
import { patchData } from "../../utils/patchData";

export default function Modal({ personData }) {

    const { handleSubmit, touched, errors, getFieldProps } = useFormik({
        initialValues: {
            name: '',
            last_name: '',
            email: '',
            rol: '',
            color: ''
        },
        onSubmit: (values) => {
            console.log('Submit', values)
            patchData(`http://localhost:4000/api/user/${personData.id_user}`, values)
            window.location.reload()
        },
        validationSchema: Yup.object({

        })
    });

    console.log('personData', personData);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }


    return (
        <Fragment>
            <div onClick={handleOpen} variant="gradient" className="text-indigo-600 hover:text-indigo-900">
                Editar
            </div>
            <Dialog
                open={open}
                handler={handleOpen}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
            >
                <DialogHeader>Editar usuario</DialogHeader>
                <DialogBody divider>
                    <form onSubmit={handleSubmit} noValidate>
                        <input type="text" placeholder="Nombre" name="name" {...getFieldProps('name')} />
                        <input type="text" placeholder="Apellido" name="last_name" {...getFieldProps('last_name')} />
                        <input type="email" placeholder="Email" name="email" {...getFieldProps('email')} />
                        <select name="rol"  {...getFieldProps('rol')}>
                            <option value="Admin">Admin</option>
                            <option value="User">User</option>
                        </select>
                        <Button type="submit" variant="gradient" color="green" onClick={handleOpen}>
                            <span>Confirm</span>
                        </Button>
                    </form>
                </DialogBody>
            </Dialog>
        </Fragment>
    );
}