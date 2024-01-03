import React from 'react';
import Card from './Card';
import card1 from '../Img/1.webp'
import card2 from '../Img/2.jpg'
import card3 from '../Img/3.webp'
import card4 from '../Img/4.webp'
import styles from './Cards.module.css'
const Cards = () => {
    return (
    <>
        <h2 className={styles.title}>Shop by category</h2>
        <main className={styles.cards}>
            <Card title="Mid-Century Bed" desc="Contract Grade" img={card1} price="Rs:39999"/>
            <Card title="Roan Bed" desc="Deacon Upholstered" img={card2} price="Rs:49999"/>
            <Card title="Emmett Bed - Wood Legs" desc="Wilson Upholstered" img={card3} price=" Rs:7999"/>
            <Card title="Yvette Bed" desc="Parker Bed" img={card4} price=" Rs:1299"/>
        </main>
        </>
    );
};

export default Cards;