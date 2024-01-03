import React from 'react';
import styles from './Banner.module.css'
import banner from "../Img/Banner1.webp"
const Banner = () => {
    return (
        <div>
            <img className={styles.banner} src={banner} alt="Banner" />
            <div className={styles.desc}>
                <h1 className={styles.title}>
                CHRISTMAS SALE!
                </h1>
                <h3>Everything is on sale</h3>
                <p className={styles.off}>up to 50% off* hot buys!</p>
                <button className={styles.shop}>Shop now !</button>
            </div>
        </div>
    );
};

export default Banner;