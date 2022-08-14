import './App.css'
import {Router,Switch} from 'react-router-dom'
import Header from './components/Header/index'
import Home from './components/Home/index'
import About from './components/About/index'
import Contact from './components/Contact/index'
import NotFound from './components/NotFound/index'


const App = () => (
  <div className="container">
    <div className="box">
    <>
      <Header />
      <Switch>
        <Router exact path="/" component={Home}/>
        <Router path="/about"  component={About}/>
        <Router path="/contact" component={Contact}/>
        <Router Component={NotFound}/>
      </Switch>
    </>
    </div>
  </div>
)

export default App
