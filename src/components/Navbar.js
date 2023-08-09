 
// Navbar.js
import "../styles/navbar.css"
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
      <nav className="navigation">
        <a href="/" className="brand-name">
          mt
        </a>
        <div
          className="navigation-menu">
          <ul>
            <li>
                <NavLink to="/home"  style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "black" : "black",
                  };
                }}>home</NavLink>
            </li>
            <li>
                <NavLink to="/resume" style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "black" : "black",
                  };
                 }} >resume</NavLink>
            </li>
            <li>
                <NavLink to="/projects" style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "black" : "black",
                  };
                 }} >projects</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

