import "./Navbar.css";
import { useState } from "react";
import {Link } from 'react-router-dom'


function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const isMobile = window.innerWidth < 1024;
  

  const handleMenuIsOpen = () => {
    setMenuIsOpen(!menuIsOpen);
  };

 

 

  return (
    <>
      {isMobile ? (
        <nav className={`nav-mobile ${menuIsOpen ? "active" : "" }`}>
          <div  className="navbar-link margin-top delay-1" >
          <Link to="/">
            Sports
            </Link>
          </div>
          <div  className="navbar-link margin-top delay-2" >
            <Link to='/epreuves'>
           Épreuves
            </Link>
          </div>
          <div  className="navbar-link margin-top delay-2" >
            <Link to='/athletes'>
           Athlètes gagnants
            </Link>
          </div>
        </nav>
      ) : (
        <nav className="nav-desktop">
             <div className="navbar-link  delay-1">
          <Link to="/">
            Sports
            </Link>
          </div>
          <div className="navbar-link  delay-1">
          <Link to="/epreuves">
            Épreuves
            </Link>
          </div>
          <div className="navbar-link  delay-2">
          <Link to='/athletes'>
           Athlètes gagnants
            </Link>
          </div>
        </nav>
      )}

      {isMobile ? (
        <button
          onClick={handleMenuIsOpen}
          type="button"
          aria-label="toggle curtain navigation"
          className="nav-toggler"
        >
          <span
            className={` line l1 ${menuIsOpen ? "active" : "line"}`}
          ></span>
          <span
            className={`line l2 ${menuIsOpen ? "active" : "line"}`}
          ></span>
          <span
            className={` line l3 ${menuIsOpen ? "active" : "line"}`}></span>
        </button>
      ) : (
        <button
          onClick={handleMenuIsOpen}
          type="button"
          aria-label="toggle curtain navigation"
          className="nav-toggler"
        >
          <span
            className={` line l1 ${menuIsOpen ? "active" : "line"}`}
          ></span>
          <span
            className={`line l2 ${menuIsOpen ? "active" : "line"}`}
          ></span>
          <span
            className={` line l3 ${menuIsOpen ? "active" : "line"}`}
          ></span>
        </button>
      )}
    </>
  );
}

export default Navbar;
