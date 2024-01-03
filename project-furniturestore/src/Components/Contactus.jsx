import React, { Component } from 'react';
import styels from './ContactUs.module.css'

class Contactus extends Component {
    constructor(){
        super();
        this.state={
            text:''
        }
    }
   
    changeHandler = event => {
        this.setState({
        text : event.target.value
        })
        console.log(event.target.value);
    }
    submitHandler = event => {
            event.preventDefault(); 
            console.log(this.state.text);
    }

    render() {
        return (
        <div>
            <form onSubmit={this.submitHandler} className={styels.contact}>
                 <h5 className={styels.desc}>Get up to $100 off* your first order when you sign up for emails</h5>
                 <input className={styels.searchinp} onChange={this.changeHandler} value={this.state.text} type='email' required placeholder='Email'/>
                 <button className={styels.submit} onClick={this.submit} type='submit'>Send</button>
            </form>
        </div>
        );
    }
}

export default Contactus;

