import React from 'react'
import {Link} from 'react-router-dom'

export default function FifthTask() {
    return (
        <>
        <div className="app">
            <div className="col-8">
                <div className="row">
                    <h1 className="text-center">Rules of Design</h1>
                    <p className="text-justify">As designers, we always strive for better user interfaces. 9 out of 10 times, if a user has troubles with an interface, they are likely to drop your product. We don't want that to happen so it's imperative that we have well designed ones so that we keep our users using our product.<br/>
                    <br/>
                    There are some common rules that help us design better interfaces. Ben Shneiderman has 8 design tips that help us in our journey.<br/>
                    <br/>
                    Although there are 8 rules, we'll only cover a few. Striving for consistency means just that. Ensure you have a consistent design through out to have a level of cohesiveness. It also shows the user that they are in a familiar place when navigating. Design dialogue to yield closure means using text to confirm with the user what they are doing. It's a way of providing that extra communication to the user to ensure they are doing the right actions. <br/>
                    <br/>
                    Never let users get stuck in a place they don't want to be in, so always let them reverse their actions, even if they don't want to. Finally, the human attention span is very limited, so reduce the cognitive load when designing. This will also make sure that users will easily think of your product in the long term.
                    </p>
                </div>

                <div className="row d-flex justify-content-around mt-3">
                    <Link to="/home"><button className="btn theme_3 text-white start">Home</button></Link>
                    <Link to="/fourthtask"><button className="btn theme_3 text-white start">Back</button></Link>
                    <Link to="/quizstart"><button className="btn theme_3 text-white ml-2 start">Next Task</button></Link> 
                </div>
            </div>
        </div>
            
        </>
    )
}