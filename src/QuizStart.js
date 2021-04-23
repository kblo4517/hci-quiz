import React from 'react'
import {Link} from 'react-router-dom'

export default function QuizStart() {
    return (
        <>
        <div className="app">
            <div className="col-8">
                <div className="row">
                    <h1 className="text-center">Quiz Time</h1>
                    <p className="text-justify">The next section is the quiz. Please prepare. You will get a score at the end. <br/> </p>
                </div>

                <div className="row d-flex justify-content-around mt-3">
                    <Link to="/home"><button className="btn theme_3 text-white start">Home</button></Link>
                    <Link to="/fifthtask"><button className="btn theme_3 text-white start">Back</button></Link>
                    <Link to="/final"><button className="btn theme_3 text-white ml-2 start">Take the Quiz!</button></Link> 
                </div>
            </div>
        </div>
            
        </>
    )
}