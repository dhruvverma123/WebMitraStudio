import "./Footer.css";
import logo from "../Navbar/newLogo.png";
import { Link } from "react-router";
import { motion } from "framer-motion";

function Footer() {
  return (
    <div className="footer">
      <div className="internalData">
        <motion.div
          className="companyData"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{
            once: true,
            margin: "-200px 0px",
          }}
        >
          <span>
            <img src={logo} alt="logo" />
          </span>
          <h2>
            At WebMitra Studio, we create fast, modern, and user-friendly
            websites that help businesses grow online and connect with their
            audience effectively.
          </h2>
          <h4> WebMitra Studio — Your Digital Growth Partner</h4>
        </motion.div>
        <div className="quickAndServices">
          <motion.div
            className="quickLinks"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{
              once: true,
              margin: "-200px 0px",
            }}
          >
            <h2>Details</h2>
            <Link to="/" style={{ textDecoration: "none" }}>
              <span>Home</span>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <span>About us</span>
            </Link>
            <Link to="/portfolio" style={{ textDecoration: "none" }}>
              <span>Portfolio</span>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <span>Contact</span>
            </Link>
            <Link to="/process" style={{ textDecoration: "none" }}>
              <span>Our process</span>
            </Link>
          </motion.div>
          <motion.div
            className="services"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{
              once: true,
              margin: "-200px 0px",
            }}
          >
            <h2>Services</h2>
            <p>Dynamic Website Development</p>
            <p>MERN Stack Development</p>
            <p>Static Website Development</p>
            <p>Business Websites</p>
            <p>Portfolio Websites</p>
            <p>Custom websites</p>
            <p>Website Maintenance</p>
          </motion.div>
        </div>
        <motion.div
          className="contact1"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{
            once: true,
            margin: "-200px 0px",
          }}
        >
          <h2>Office</h2>
          <div>
            <p>
              6 - yadgarpur, Pandav Nagar, ( kila road ) Meerut, Uttar Pradesh
              250001
            </p>
            <h4>Uttar Pradesh, India - HQ</h4>
          </div>
          <div>
            <h3>Contact No. +91-9548087591</h3>
          </div>
          <div>
            <h3>Email - webmitrastudio@gmail.com</h3>
          </div>
        </motion.div>
      </div>

      <h4>© 2026 WebMitra Studio. All Rights Reserved.</h4>
    </div>
  );
}
// linkden -> https://www.linkedin.com/in/webmitra-studio-undefined-89b702414/
export default Footer;
