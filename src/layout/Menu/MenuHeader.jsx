import React from 'react'
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import menuImg from '../../assets/img/menu_icon.svg';
import { Link } from 'react-router-dom';

export const MenuHeader = () => {

    return (
        <>
            <Menu>
                <MenuHandler>
                    <Button variant="gradient" className='menu__button'>
                        <img src={menuImg} alt="menu" />
                    </Button>
                </MenuHandler>
                <MenuList>
                    <MenuItem>
                        <Link to="/users">Usuarios</Link>
                    </MenuItem>
                </MenuList>
            </Menu>
        </>
    )
}
