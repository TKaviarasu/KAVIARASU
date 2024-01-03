import React from 'react';
import Option from './Option';
import styles from './Options.module.css'
import icon1 from '../Img/icon4.svg'
import icon2 from '../Img/icon5.svg'
import icon3 from '../Img/icon6.svg'
import icon4 from '../Img/icon7.svg'

const Options = () => {
    return (
        <div className={styles.options}>
            <Option img={icon1} title="price match guarantee" details="Find our products at a lower price, we’ll match it" link="learn more"/>
            <Option img={icon2} title="refer a friend" details="Share with a friend, save with a friend" link="learn more"/>
            <Option img={icon3} title="this is home your way" details="best online marketplaces so you can get rid of it quickly!" link="learn more"/>
            <Option img={icon4} title="orange rewards" details="options for used furniture marketplaces:" link="learn more"/>
        </div>
    );
};

export default Options;