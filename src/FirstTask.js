import React from 'react'
import {Link} from 'react-router-dom'



export default function FirstTask() {

    return (
        <>
        <div className="app">
            <div className="col-8">
                <div className="row">
                    <h1 className="text-center">Usability vs User Experience</h1>
                    <p className="text-justify">Often times, newcomers confuse the terms usability and user experience, or they use them interchangably. However, these terms are very different and present very different things to the user. Let's go over these terms. <br/>
                    <br/>
                    Usability refers to how products are effective, easy to use and learn. If they are free of errors and satisfying to the users. Some things to take into account when designing something is: Is this product easy to use? Will my users have a frustrating time using this product? <br/>
                    <br/>
                    User experience on the other hand refers to just that; the user's experience. You want to learn about the feelings that the user gets from using your product. Does it it provide them with a sense of pleasure or do they dread having to use your product?</p>
                </div>

                <div className="row d-flex justify-content-around mt-3">
                    <Link to="/home"><button className="btn theme_3 text-white start mr-2">Back</button></Link>
                    <Link to="/secondtask"><button className="btn theme_3 text-white ml-2 start">Next Task</button></Link> 
                </div>
            </div>
        </div>
            
        </>
    )
}