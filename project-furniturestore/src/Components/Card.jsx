import React, { Component } from 'react';
import styles from './Card.module.css' 
import Up from '../Img/Up.svg'
import Down from '../Img/Down.svg'




class Card extends Component {
    constructor(){
        super();
        this.state={
            count : 0
        }
    }

    uparrow = () =>{
        this.setState(prevent => ({
            count:prevent.count + 1
        }))
    }
    Downarrow = () => {
        if(this.state.count >=1){
            this.setState(prevent => ({
                count:prevent.count-1
            }))
        }
       
    }


    render() {
        const {img , title,desc,price} = this.props ;
        const {count} = this.state ;
        return (
             <div>
             <div className={styles.card}>
             <img src={img} alt='Card1'/>
             <h4 className={styles.title}>{title}</h4>
             <p className={styles.desc}>{desc}</p>
             <span className={styles.price}>{price}</span>
             <div className={styles.counter}>
                 <img onClick={this.Downarrow} className={this.state.count ? '' : styles.deactive} src={Down} alt='Down' />
                 <span className={styles.num}>{count}</span>
                 <img onClick={this.uparrow}  className={styles.up} src={Up} alt='Up' />
             </div>
             <button className={styles.shopbtn} type='button'>Shop now</button>
             </div>
             </div>
        );
    }
}

export default Card;







