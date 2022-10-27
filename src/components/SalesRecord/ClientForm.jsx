import React from 'react'
import { Button } from "@material-tailwind/react";

export const ClientForm = () => {
    return (
        <form noValidate className="content__form generalForm">

            <div className="content__form--group">
                <div className="content__form--input">
                    <label htmlFor="nameUser">Nombre</label>
                    <input type="text" name="nameUser" placeholder="Ejemplo: Juan" />
                    <small className="descriptionInput"></small>
                </div>

                <div className="content__form--input">
                    <label htmlFor="nameUser">Apellido</label>
                    <input type="text" name="nameUser" placeholder="Ejemplo: Perez" />
                    <small className="descriptionInput"></small>
                </div>
            </div>

            <div className="content__form--group">
                <div className="content__form--input">
                    <label htmlFor="nameUser">Dirección</label>
                    <input type="text" name="nameUser" placeholder="Ejemplo: Cll 42 sur # 27 - 88" />
                    <small className="descriptionInput"></small>
                </div>

                <div className="content__form--input">
                    <label htmlFor="nameUser">Celular</label>
                    <input type="text" name="nameUser" placeholder="Ejemplo: 316555555" />
                    <small className="descriptionInput"></small>
                </div>
            </div>

            <div className="content__form--group">
                <div className="content__form--input">
                    <label htmlFor="nameUser">Tipo de identificación</label>
                    <input type="text" name="nameUser" placeholder="Ejemplo: Cedula" />
                    <small className="descriptionInput"></small>
                </div>

                <div className="content__form--input">
                    <label htmlFor="nameUser">Identificación</label>
                    <input type="text" name="nameUser" placeholder="Ejemplo: 10136573677" />
                    <small className="descriptionInput"></small>
                </div>
            </div>

            <div className="content__form--group flex-item align-item-center justify-content-end">

                <Button className="btn-small" type="submit">Limpiar</Button>
                <Button color="green" className="btn-small" type="submit">Guardar</Button>

            </div>
        </form>
    )
}
