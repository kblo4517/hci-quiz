import './App.css';
// import chip from './img/chip.jpg'
import {BrowserRouter as Router/*, Switch, Route, Link, Redirect*/} from 'react-router-dom'
import Home from './Home'
import FirstTask from './FirstTask';
import SecondTask from './SecondTask'
import ThirdTask from './ThirdTask'
import FourthTask from './FourthTask'
import FifthTask from './FifthTask'
import QuizStart from './QuizStart'
import Final from './Final'

function App() {

  const routes = [
    {path: '/home', name: 'Home', Component: Home},
    {path: '/firsttask', name: 'First Task', Component: FirstTask},
    {path: '/secondtask', name: 'Second Task', Component: SecondTask},
    {path: '/thirdtask', name: 'Third Task', Component: ThirdTask},
    {path: '/fourthtask', name: 'Fourth Task', Component: FourthTask},
    {path: '/fifthtask', name: 'Fifth Task', Component: FifthTask},
    {path: '/quizstart', name: 'Quiz Start', Component: QuizStart},
    {path: '/final', name: 'Final', Component: Final},
  ]

  // const history = useHistory()

  return (
    <>  
      <Router>


          
            {/* 
            <Route path="/home">
              <Home />
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
            <Redirect from="/" to="/home"/> */}
      </Router> 
    </>
  );
}

export default App;
