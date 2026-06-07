import "./Navbar.css";
import { Link } from "react-router";
import logo from "./newLogo.png";
import { useContext, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Context } from "../ContextAPI";

export function Navbar() {
  let [opened, setOpened] = useState<number>(0);
  let { isNavOpen, setIsNavOpen } = useContext(Context);

  function handleOpened(value: number) {
    setOpened(value);
  }

  return (
    <div className="parent">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo.jpg" />
          </Link>
        </div>
        <div className="navLinks">
          <div onClick={() => handleOpened(1)}>
            <Link to="/" className={`${opened == 1 ? "black" : ""}`}>
              <span>Home</span>
            </Link>
          </div>
          <div onClick={() => handleOpened(2)}>
            <Link to="/about" className={`${opened == 2 ? "black" : ""}`}>
              <span>About us</span>
            </Link>
          </div>
          <div onClick={() => handleOpened(3)}>
            <Link to="/portfolio" className={`${opened == 3 ? "black" : ""}`}>
              <span>Portfolio</span>
            </Link>
          </div>
          <div onClick={() => handleOpened(4)}>
            <Link to="/contact" className={`${opened == 4 ? "black" : ""}`}>
              <span>Contact</span>
            </Link>
          </div>
          <div onClick={() => handleOpened(5)}>
            <Link to="/process" className={`${opened == 5 ? "black" : ""}`}>
              <span>Our process</span>
            </Link>
          </div>
        </div>
        <span onClick={() => setIsNavOpen(true)}>
          <MenuIcon fontSize="large" className="menItem" />
        </span>
      </div>
      {/* for 772px */}
      <div className={`${isNavOpen ? "navLinks2" : "hide"}`}>
        <div>
          <div onClick={() => handleOpened(1)}>
            <Link
              to="/"
              className={`${opened == 1 ? "black" : ""}`}
              style={{ textDecoration: "none" }}
            >
              <span>Home</span>
            </Link>
          </div>
          <div onClick={() => handleOpened(2)}>
            <Link
              to="/about"
              className={`${opened == 2 ? "black" : ""}`}
              style={{ textDecoration: "none" }}
            >
              <span>About us</span>
            </Link>
          </div>
          <div onClick={() => handleOpened(3)}>
            <Link
              to="/portfolio"
              className={`${opened == 3 ? "black" : ""}`}
              style={{ textDecoration: "none" }}
            >
              <span>Portfolio</span>
            </Link>
          </div>
          <div onClick={() => handleOpened(4)}>
            <Link
              to="/contact"
              className={`${opened == 4 ? "black" : ""}`}
              style={{ textDecoration: "none" }}
            >
              <span>Contact</span>
            </Link>
          </div>
          <div onClick={() => handleOpened(5)}>
            <Link
              to="/process"
              className={`${opened == 5 ? "black" : ""}`}
              style={{ textDecoration: "none" }}
            >
              <span>Our process</span>
            </Link>
          </div>
        </div>
        <span onClick={() => setIsNavOpen(false)}>
          <CloseIcon fontSize="large" className="closeBtn" />
        </span>
      </div>
    </div>
  );
}
