import { MenuHeader } from '../Menu/MenuHeader';
import logopp from '../../assets/img/gestion-ventas-icon.svg'

export const NavBar = () => {
    return (
        <header>
            <div className="generalContainer navbar__pp">
                <div className="container__icon">
                    <MenuHeader />
                </div>
                <div className="container__logopp">
                    <img src={logopp} alt="principal logo" />
                </div>
            </div>
        </header>
    );
}




