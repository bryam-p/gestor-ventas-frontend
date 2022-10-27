import { MenuHeader } from '../Menu/MenuHeader';
import logopp from '../../assets/img/gestion-ventas-icon.svg'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../auth/context/AuthContext';


export const NavBar = () => {

    const { user, logout } = useContext(AuthContext);

    return (
        <header>
            <div className="generalContainer navbar__pp">
                <div className="container__icon">
                    <MenuHeader />
                </div>
                <div className="navBar__container">
                    <Link to="/" className="container__logopp">
                        <img src={logopp} alt="principal logo" />
                    </Link>
                    <div>
                        <span className="navBar__container-user">
                            {user?.name}
                        </span>
                        <Link to="/" className="navBar__container-link" onClick={logout}>
                            Salir
                        </Link>
                    </div>
                </div>
            </div>
        </header >
    );
}




