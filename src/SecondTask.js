import React from 'react'
import {Link} from 'react-router-dom'



export default function SecondTask() {

    return (
        <>
        <div className="app">
            <div className="col-8">
                <div className="row">
                    <h1 className="text-center">Signifiers and Affordances</h1>
                    <p className="text-justify">Affordances are the relationships between the user and the enviornment. Basically everything has an affordance and some objects have affordances that are more obvious than others. In the digital space, this also rings true. Affordances provide hints as to what an object can do or is capable of doing. <br/>
                    <br/>
                    Some of the common digital affordances are: explicit affordance, pattern affordance, hidden affordance, and false affordance. <br/>
                    <br/>
                    Signifiers work hand in hand with affordances, as they provide the users the guidance on how to understand how something works. A good example of a signifier is something like a stop sign. It gives you a clear message that you should "stop" at an intersection or crossing.  </p>
                </div>

                <div className="row d-flex justify-content-around mt-3">
                    <Link to="/home"><button className="btn theme_3 text-white start">Home</button></Link>
                    <Link to="/firsttask"><button className="btn theme_3 text-white start">Back</button></Link>
                    <Link to="/thirdtask"><button className="btn theme_3 text-white ml-2 start">Next Task</button></Link> 
                </div>
            </div>
        </div>
            
        </>
    )
}