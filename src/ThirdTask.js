import React from 'react'
import {Link} from 'react-router-dom'

export default function ThirdTask() {
    return (
        <>
        <div className="app">
            <div className="col-8">
                <div className="row">
                    <h1 className="text-center">Interaction Types</h1>
                    <p className="text-justify">Being designers requires us to think about the different ways that humans work worth with software and hardware. Interaction is one of the most important aspects of the human-computer interface because it strenghtens our knowledge and trains use on how to use common interaction types. The more we get used to interaction types, the more computers and software will become easier to use in our daily lives.   <br/>
                    <br/>
                    There are some common interaction types. The 5 main types are instructing, conversing, manipulating, exploring, and responding. <br/>
                    <br/>
                    Instructing is telling the system what the user wants to do. This one is probably the most common. Typing, moving your mouse to click on items are examples of instructing. Some of these bleed over into each other. For example, manipulating can also be using the mouse to move a file to a different folder. </p>
                </div>

                <div className="row d-flex justify-content-around mt-3">
                    <Link to="/home"><button className="btn theme_3 text-white start">Home</button></Link>
                    <Link to="/firsttask"><button className="btn theme_3 text-white start">Back</button></Link>
                    <Link to="/fourthtask"><button className="btn theme_3 text-white ml-2 start">Next Task</button></Link> 
                </div>
            </div>
        </div>
            
        </>
    )
}