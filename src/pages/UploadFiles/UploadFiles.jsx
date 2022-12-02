import React, { useState } from 'react'
import { Button } from "@material-tailwind/react";
import { uploadFiles } from '../../firebase/config'
import { useForm } from '../../hooks/useForm';
import { postData } from '../../utils/postData';

export const UploadFiles = () => {
    const [saveFile, setSaveFile] = useState({});
    const [preview, setPreview] = useState()

    const handleOnFile = ({ target }) => {
        if (target.files[0]) {
            setSaveFile(target.files[0])

            setPreview(target.files[0]);
            const reader = new FileReader();

            reader.addEventListener("load", () => {
                setPreview(reader.result);
            });

            reader.readAsDataURL(target.files[0]);
        }
    }

    const [formValues, handleInputChange] = useForm({
        rename: '',
        sales_id: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault()

        uploadFiles(saveFile, formValues.rename)

        const response = postData('http://localhost:4000/api/file', {
            name: formValues.rename,
            type: saveFile.type,
            size: Number(saveFile.size),
            id_sale: formValues.sales_id
        })

        response.then(res => {
            if (res.status === 200) {
                alert('Imagen subida')
                window.location.reload();
            } else {
                alert('Ha ocurrido un error en los datos')
            }
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="formUploadContainer">
                <h2 className='text-sale'>Carga de imagenes</h2>

                <div className="flex-img">
                    <label htmlFor="file" className="newFile"></label>
                    <input type="file" id="file" placeholder='Cargar archivo' name="file" onChange={handleOnFile} required />

                    {

                        preview && <div className="content-preview">
                            <div>Vista previa de la imagen</div>
                            <img src={preview} alt="No image" width="300" />
                        </div>
                    }

                </div>

                <input type="text" placeholder='Renombrar el archivo' name='rename' onChange={handleInputChange} required />

                <input type="text" placeholder='Asociar a una venta' name='sales_id' onChange={handleInputChange} required />

                <Button type="submit">Guardar</Button>
            </form>
        </>
    )
}
