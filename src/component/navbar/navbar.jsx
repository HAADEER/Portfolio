import "./navbar.css";
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (

    <div className="container navbar-wrapper">
      <h2>
        <Link to="/">LOGO </Link>
      </h2>
        <ul className="navbar-item">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li >
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
            </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
        </ul>
      </div>
  )
}

export default Navbar