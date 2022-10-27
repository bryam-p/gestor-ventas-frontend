import React from 'react'
import { Button } from "@material-tailwind/react";

export const SellForm = () => {
    return (
        <form noValidate className="content__form generalForm">

            <div className="content__form--group">
                <div className="content__form--input">
                    <label htmlFor="nameUser">Cuenta contrato</label>
                    <input type="text" name="nameUser" placeholder="Cuenta contrato" />
                    <small className="descriptionInput">Descripción del campo</small>
                </div>

                <div className="content__form--input">
                    <label htmlFor="nameUser">Cuenta contrato</label>
                    <input type="text" name="nameUser" placeholder="Cuenta contrato" />
                    <small className="descriptionInput">Descripción del campo</small>
                </div>
            </div>

            <div className="content__form--group">
                <div className="content__form--input">
                    <label htmlFor="nameUser">Cuenta contrato</label>
                    <input type="text" name="nameUser" placeholder="Cuenta contrato" />
                    <small className="descriptionInput">Descripción del campo</small>
                </div>

                <div className="content__form--input">
                    <label htmlFor="nameUser">Cuenta contrato</label>
                    <input type="text" name="nameUser" placeholder="Cuenta contrato" />
                    <small className="descriptionInput">Descripción del campo</small>
                </div>
            </div>

            <div className="content__form--group">
                <div className="content__form--input">
                    <label htmlFor="nameUser">Cuenta contrato</label>
                    <input type="text" name="nameUser" placeholder="Cuenta contrato" />
                    <small className="descriptionInput">Descripción del campo</small>
                </div>

                <div className="content__form--input">
                    <label htmlFor="nameUser">Cuenta contrato</label>
                    <input type="text" name="nameUser" placeholder="Cuenta contrato" />
                    <small className="descriptionInput">Descripción del campo</small>
                </div>
            </div>

            <div className="content__form--group">
                <div className="content__form--input">
                    <label htmlFor="nameUser">Cuenta contrato</label>
                    <input type="text" name="nameUser" placeholder="Cuenta contrato" />
                    <small className="descriptionInput">Descripción del campo</small>
                </div>

                <div className="content__form--input">
                    <label htmlFor="nameUser">Cuenta contrato</label>
                    <input type="text" name="nameUser" placeholder="Cuenta contrato" />
                    <small className="descriptionInput">Descripción del campo</small>
                </div>
            </div>



            <Button className="btn-small" type="submit">Limpiar</Button>
            <Button className="btn-small" type="submit">Guardar</Button>
        </form>
    )
}
