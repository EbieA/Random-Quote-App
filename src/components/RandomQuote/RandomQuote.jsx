import React, { useState } from 'react';
import './RandomQuote.css'
import twitter_icon from '../assets/x.png'
import whatsapp_icon from '../assets/whatsapp.png'
import reload_icon from '../assets/reload.png'

export default function RandomQuote () {

    let quotes = [];

    async function loadQuotes() {
        const response = await fetch('https://type.fit/api/quotes');
        quotes = await response.json();
    }

    const random = () => {
        const select = quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(select);
    }

    const twitter = () =>{
        window.open(`http://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}`);
    }

    const whatsapp = () => {
        window.location=`whatsapp://send?text= ${quote.text} - ${quote.author.split(',')[0]}`;
    }

    const [quote,setQuote] = useState({
        text: 'Difficulties increase the nearer we get to the goal.',
        author:'Johann Wolfgang von Goethe',
    });

    loadQuotes();
  return ( 
    <>
    <div className="title">RANDOM QUOTES</div>
    <div className='container'>
        <div className="quote">{quote.text}</div>
        <div className="line"></div>
        <div className="bottom">
            <div className="author"> - {quote.author.split(',')[0]}</div>
            <div className="icons">
                <img src={reload_icon}onClick={()=>{random()}} alt=""></img>
                <img src={twitter_icon}onClick={()=>{twitter()}} alt="" />
                <img src={whatsapp_icon}onClick={()=>{whatsapp()}} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}