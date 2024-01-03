import React from 'react';
import styles from './Option.module.css'

const Option = (props) => {
    const {img , title , details,link} = props ;
    return (
        <div className={styles.optionCard}>
            <img className='optionIcon' src={img} alt='' />
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.details}>{details}</p>
            <p className={styles.link}>{link}</p>
        </div>
    );
};

export default Option;