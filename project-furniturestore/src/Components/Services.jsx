import React from 'react';
import styles from './Services.module.css'
import icon1 from '../Img/icon1.svg'
import icon2 from '../Img/icon2.svg'
import icon3 from '../Img/icon3.svg'
const Services = () => {
    return (
        <div className={styles.services}>
            <div className={styles.sevice}>
            <img src={icon1} alt='icon' />
            <h4 className={styles.title}>making an impact</h4>
            <p className={styles.desc}>How were giving back to our communities, teams, and planet.</p>
            <p className={styles.link}>learn more</p>
            </div>

            <div className={styles.sevice}>
            <img src={icon2} alt='icon' />
            <h4 className={styles.title}>corporate social responsibility</h4>
            <p className={styles.desc}>Get the whole picture on what were doing to help our employees</p>
            <p className={styles.link}>learn more</p>
            </div>

            <div className={styles.sevice}>
            <img src={icon3} alt='icon' />
            <h4 className={styles.title}>hope to dream</h4>
            <p className={styles.desc}>Every child should have a good nights sleep and a bed to call their own.</p>
            <p className={styles.link}>learn more</p>
            </div>

        </div>
    );
};

export default Services;