import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-bar">
    <div className="nav-logo-box">
      <img
        className="wave-logo"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <p className="title">Wave</p>
    </div>
    <nav className="nav-link-box">
     <p className="title"><Link to="/"> Home</Link></p>
      <p className="title"><Link to="/about">About</Link></p>
     <p className="title"><Link to="/contact"> Contact</Link></p>
    </nav>
  </nav>
)
export default Header
