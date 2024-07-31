 
// Navbar.js
import "../styles/navbar.css"
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
      <nav className="navigation">
        <div
          className="navigation-menu">
          <ul>
            <li>
                <NavLink to="/home">home</NavLink>
            </li>
            <li>
                <NavLink to="/projects">projects</NavLink>
            </li>
            <li>
                <NavLink to="/resume" >resume</NavLink>
            </li>
            
            
          </ul>
        </div>
      </nav>
    );
  }

