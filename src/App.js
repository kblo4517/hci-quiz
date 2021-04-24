import './App.css';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'
import Home from './Home'
import FirstTask from './FirstTask';
import SecondTask from './SecondTask'
import ThirdTask from './ThirdTask'
import FourthTask from './FourthTask'
import FifthTask from './FifthTask'
import QuizStart from './QuizStart'
import Final from './Final'
import {AnimatedSwitch, spring} from 'react-router-transition'

function App() {

  function mapStyles(styles) {
    return {
      opacity: styles.opacity,
      transform: `scale(${styles.scale})`
    }
  }

  function bounce(val) {
    return spring(val, {
      stiffness: 330,
      damping: 22
    })
  }

  const bounceTransition = {
    atEnter: {
      opacity: 0,
      scale: 1.2
    },
    atLeave: {
      opacity: bounce(0),
      scale: bounce(0.8)
    },
    atActive: {
      opacity: bounce(1),
      scale: bounce(1)
    }
  }
  // const history = useHistory()

  return (
    <>  
      <Router>
        <AnimatedSwitch atEnter={bounceTransition.atEnter} 
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles} >
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
          <Redirect from="/" to="/home"/>
        </AnimatedSwitch>
      </Router> 
    </>
  );
}

export default App;
