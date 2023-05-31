import "./Navbar.css";
import { useState } from "react";


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
            Épreuves
          </div>
          <div  className="navbar-link margin-top delay-2" >
           Athlètes gagnants
          </div>
        </nav>
      ) : (
        <nav className="nav-desktop">
          <div className="navbar-link  delay-1">
          Épreuves
          </div>
          <div className="navbar-link  delay-2">
          Athlètes gagnants
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
