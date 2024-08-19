import { useState } from 'react';
import style from './Navigation.module.css';
import logo from '../../../assets/Navbar/logo.png';

function Navigation() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div className={style.navbar}>
            <img src={logo} alt="Logo" className={style.logo} />
            <div className={style.hamburger} onClick={toggleNav}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className={`${style.nav} ${isNavOpen ? style.open : ''}`}>
                <ul className={style.navList}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <a href="#" className={style.btn_register}>Register</a>
            </nav>
        </div>
    );
}

export default Navigation;