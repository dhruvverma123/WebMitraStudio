import "./Portfoliopage.css";
import mainImg from "./mainImg.png";
import first from "./first.png";
import second from "./second.png";
import third from "./third.png";
import fourth from "./fourth.png";
import fifth from "./fifth.png";
import laptop from "./laptop_realistic.jpg";
import { Link } from "react-router";
import nodejs from "./nodejs.svg";
import expressjs from "./Expressjs.png";
import reactjs from "./react.svg";
import mongoDB from "./mongodb.svg";
import git from "./git.svg";
import github from "./github.svg";
import html from "./html.svg";
import css from "./css.svg";
import js from "./javascript.svg";
import aws from "./amazon.svg";
import bootstrap from "./boostrap.svg";
import npm from "./npm.svg";
import typescript from "./typescript.svg";
import vs from "./vscode.svg";
import { motion } from "framer-motion";
import { useEffect, useContext } from "react";
import { Context } from "../../ContextAPI";

export function PortfolioPage() {
  let techImages = [
    nodejs,
    expressjs,
    reactjs,
    mongoDB,
    git,
    github,
    html,
    js,
    css,
    aws,
    bootstrap,
    npm,
    typescript,
    vs,
  ];

  let { setIsNavOpen } = useContext(Context);

  useEffect(() => {
    setIsNavOpen(false);
  }, [setIsNavOpen]);

  return (
    <div className="portfolio">
      <div className="leftRound"></div>
      <div className="wrapper">
        <div className="hero1">
          <motion.span
            className="content1"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{
              once: true,
              margin: "-200px 0px",
            }}
          >
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{
                once: true,
                margin: "-200px 0px",
              }}
            >
              Our Portfolio
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{
                once: true,
                margin: "-200px 0px",
              }}
            >
              Creating Websites That Grow your Business
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{
                once: true,
                margin: "-200px 0px",
              }}
            >
              At WebMitra Studio, we build modern, responsive, and
              high-performing websites that help brands create a powerful online
              presence. From business websites to dynamic web applications, we
              turn ideas into digital experiences.
            </motion.p>
          </motion.span>
          <motion.span
            className="content2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{
              once: true,
              margin: "-200px 0px",
            }}
          >
            <img src={mainImg} alt="HeroImage" />
          </motion.span>
        </div>
        <div className="tillNowWebsites">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{
              once: true,
              margin: "-200px 0px",
            }}
          >
            Some of our Finest work
          </motion.h1>
          <div className="builtWebsites">
            <div>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{
                  once: true,
                  margin: "-100px 0px",
                }}
              >
                <Link to="/portfolio/bizgrow">
                  <img src={laptop} alt="laptop" className="laptop" />
                  <img src={first} alt="first" className="first" />
                </Link>
              </motion.span>
              <h3>BizGrow</h3>
            </div>
            <div>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{
                  once: true,
                  margin: "-100px 0px",
                }}
              >
                <Link to="/portfolio/shopease">
                  <img src={laptop} alt="laptop" className="laptop" />
                  <img src={second} alt="second" className="second" />
                </Link>
              </motion.span>
              <h3>ShopEase</h3>
            </div>
            <div>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{
                  once: true,
                  margin: "-100px 0px",
                }}
              >
                <Link to="/portfolio/foodvilla">
                  <img src={laptop} alt="laptop" className="laptop" />
                  <img src={third} alt="third" className="third" />
                </Link>
              </motion.span>
              <h3>FoodVilla</h3>
            </div>
            <div>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{
                  once: true,
                  margin: "-100px 0px",
                }}
              >
                <Link to="/portfolio/taskpro">
                  <img src={laptop} alt="laptop" className="laptop" />
                  <img src={fourth} alt="fourth" className="fourth" />
                </Link>
              </motion.span>
              <h3>TaskPro</h3>
            </div>
            <div>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{
                  once: true,
                  margin: "-100px 0px",
                }}
              >
                <Link to="/portfolio/alex">
                  <img src={laptop} alt="laptop" className="laptop" />
                  <img src={fifth} alt="fifth" className="fifth" />
                </Link>
              </motion.span>
              <h3>Alex.</h3>
            </div>
          </div>
        </div>
        <div className="techuse">
          <motion.h1
            className="tech"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{
              once: true,
              margin: "-200px 0px",
            }}
          >
            Tech stack we use
          </motion.h1>
          <motion.div
            className="techusechild"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {[...techImages, ...techImages].map((img, idx) => (
              <div key={idx} className="imgDiv">
                <img src={img} alt="image" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
