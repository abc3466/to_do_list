import React from 'react';
import styles from './navbar.module.css'

const Navbar = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.header_text}>오늘의 할일!</h1>
        </header>
    );
};

export default Navbar;