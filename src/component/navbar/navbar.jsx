import "./navbar.css";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (

    <div className="navbar-wrapper">
      <div className="nav-container">
      <h2>
        <Link to="/">LOGO </Link>
      </h2>
        <ul className="navbar-item">
          <li>
            <Link className ="nav-link" to="/">Home</Link>
          </li>
          <li>
          <Link className ="nav-link" to="/products">Products</Link>
            </li>
          <li>
          <Link className ="nav-link" to="/todo">Todo</Link>
          </li>
          <li>
          <Link className ="nav-link" to="/counter">Counter</Link>
          </li>
          
          <li>
          <Link className ="nav-link" to="/register">Sign Up</Link>
          </li>
        </ul>
        </div>
      </div>
  )
}

export default Navbar



