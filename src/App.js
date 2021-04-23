import './App.css';
import chip from './img/chip.jpg'
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import FirstTask from './FirstTask';
import SecondTask from './SecondTask'
import ThirdTask from './ThirdTask'
import FourthTask from './FourthTask'
import FifthTask from './FifthTask'
import QuizStart from './QuizStart'
import Final from './Final'

function App() {

  // const history = useHistory()

  return (
    <>  
      <Router>
        <Switch>
          <Route path="/home">
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
          </Route>

          
            <Route path="/firsttask">
              <FirstTask />
            </Route>
            <Route path="/secondtask">
              <SecondTask />
            </Route>
            <Route path="/thirdtask">
              <ThirdTask />
            </Route>
            <Route path="/fourthtask">
              <FourthTask />
            </Route>
            <Route path="/fifthtask">
              <FifthTask />
            </Route>
            <Route path="/quizstart">
              <QuizStart />
            </Route>
            <Route path="/final">
              <Final />
            </Route>
            <Redirect from="/" to="/home"/>
          </Switch>
      </Router> 
    </>
  );
}

export default App;
