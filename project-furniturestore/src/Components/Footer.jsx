import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul className={styles.listItem}>
                <li className={styles.titleLi}>About Ashley</li>
                <li>Our History</li>
                <li>About Ashley Furniture Industries</li>
                <li>Careers</li>
                <li>News</li>
                <li>Social Responsibility</li>
            </ul>
            <ul className={styles.listItem}>
                <li className={styles.titleLi}>Customer Care</li>
                <li>Help Center</li>
                <li>Apply for Financing</li>
                <li>Prequalify for Financing</li>
                <li>FAQ</li>
            </ul>
            <ul className={styles.listItem}>
                <li className={styles.titleLi}>Get Inspired</li>
                <li>Blog</li>
                <li>Home Ideas</li>
                <li>Digital Catalog</li>
            </ul>
        </footer>
    );
};

export default Footer;