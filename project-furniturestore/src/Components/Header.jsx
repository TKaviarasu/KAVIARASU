import React from 'react';
import styles from './Header.module.css'
import Logo from "../Img/Logo.svg"
const Header = () => {
    return (
        <header>
            <div className={styles.logo}>
                <img src={Logo} alt='Logo'/>
            </div>
            <nav>
                <ul>
                    <li>Sign-up</li>
                    <li>Login</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;