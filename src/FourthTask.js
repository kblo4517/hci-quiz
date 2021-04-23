import React from 'react'
import {Link} from 'react-router-dom'

export default function FourthTask() {
    return (
        <>
        <div className="app">
            <div className="col-8">
                <div className="row">
                    <h1 className="text-center">Accessibility</h1>
                    <p className="text-justify">Design needs to be tailored to the edges. When it comes to accessibility, us as designers are doing just that..or we should be. Designing for the edges includes those on either ends of the spectrum that need the special attention. In doing so, we also cover everyone in between. <br/>
                    <br/>
                    There are many ways that we can design hardware and software for the those with disabilities. Some of them are as easy as adding alt tags to photos so text-to-speech apps can accurately communicate information to a blind person, or it could be whole apps dedicated to those who have a very specific condition. <br/>
                    <br/>
                    Accessibility makes it so that every person is able to use different types of devices without much of a compromise. Everything in our lives are going digital, it's only right we make it useful to everyone. </p>
                </div>

                <div className="row d-flex justify-content-around mt-3">
                    <Link to="/home"><button className="btn theme_3 text-white start">Home</button></Link>
                    <Link to="/firsttask"><button className="btn theme_3 text-white start">Back</button></Link>
                    <Link to="/fifthtask"><button className="btn theme_3 text-white ml-2 start">Next Task</button></Link> 
                </div>
            </div>
        </div>
            
        </>
    )
}