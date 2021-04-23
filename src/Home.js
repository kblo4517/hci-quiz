import React from 'react'
import {Link} from 'react-router-dom'
import chip from './img/chip.jpg'


export default function Home() {
    return (
        <div className="d-flex justify-content-around app">
            <div className="col-8 text-center">
                <img src={chip} alt="computer chip" id="chip" className="" />
                <h1 className="title-1 text-center">Human Computer Interaction</h1>
            </div>
            <div className="col-4 align-self-center">
                <p className="text-justify">Hello, welcome to the Human Computer Interaction Module. During this journey, you'll learn various human computer interaction concepts and topics. Along the way, you'll be tested on what you've learned, so pay attention. At the end, there'll also be a final test. When you're ready, click the button below to begin.</p>
                <Link to="/firsttask"><button className="btn theme_3 text-white start">Start</button></Link> 
            </div>
        </div>
    )
}