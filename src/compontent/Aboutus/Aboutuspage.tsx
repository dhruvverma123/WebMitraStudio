import "./Aboutuspage.css";
import Hero from "./Hero.png";
import secondHero from "./secondImage.png";
import roundImage from "./roundImag.png";
import { FormPage } from "../Form";
import { Context } from "../../ContextAPI";
import { useContext, useEffect } from "react";
import { motion } from "framer-motion";

export function AboutusPage() {
  let { form, setForm, setIsNavOpen } = useContext(Context);

  useEffect(() => {
    setIsNavOpen(false);
  }, [setIsNavOpen]);

  return (
    <>
      <div className={form ? "bg-blur" : "about"}>
        <div className="wrapper">
          <div className="hero">
            <motion.span
              className="left"
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
                WebMitra Studio — Building Modern Static & Dynamic Websites
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
                We create fast, modern, and responsive websites for businesses,
                startups, and personal brands that are not only visually
                appealing but also optimized for performance and growth.
              </motion.h2>
            </motion.span>
            <motion.span
              className="right"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{
                once: true,
                margin: "-200px 0px",
              }}
            >
              <img src={Hero} alt="Hero image" />
            </motion.span>
          </div>
          <div className="hero2">
            <motion.span
              className="left2"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{
                once: true,
                margin: "-250px 0px",
              }}
            >
              <img src={secondHero} alt="secondHero" />
            </motion.span>
            <motion.span
              className="right2"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{
                once: true,
                margin: "-250px 0px",
              }}
            >
              <motion.h1
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{
                  once: true,
                  margin: "-200px 0px",
                }}
              >
                About WebMitra Studio
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{
                  once: true,
                  margin: "-100px 0px",
                }}
              >
                WebMitra Studio is a creative web development studio that
                designs and develops both static and dynamic websites. Our focus
                is on clean UI/UX, fast loading speed, mobile responsiveness,
                and modern technologies.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{
                  once: true,
                  margin: "-100px 0px",
                }}
              >
                Whether you need a business website, portfolio website,
                eCommerce platform, or custom web application — we transform
                your ideas into professional digital experiences.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{
                  once: true,
                  margin: "-100px 0px",
                }}
              >
                We deeply understand client requirements and create scalable,
                user-friendly solutions that help businesses build a strong
                online presence.
              </motion.p>
            </motion.span>
          </div>

          <motion.div
            className="misson"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{
              once: true,
              margin: "-250px 0px",
            }}
          >
            <h1>Our Mission</h1>
            <p>
              Our mission is to help businesses build a powerful online identity
              through modern design, smart development, and reliable support.
            </p>
          </motion.div>

          <div className="whatwedo">
            <motion.div
              className="heading"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{
                once: true,
                margin: "-200px 0px",
              }}
            >
              <h1>What We Do</h1>
            </motion.div>
            <div className="content">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{
                  once: true,
                  margin: "-200px 0px",
                }}
              >
                <h2>Static Website Development</h2>
                <p>
                  Fast, secure, and lightweight websites for businesses,
                  portfolios, and landing pages.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{
                  once: true,
                  margin: "-180px 0px",
                }}
              >
                <h2>Dynamic Website Development</h2>
                <p>
                  Scalable web solutions with custom admin panels, databases,
                  and interactive features.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{
                  once: true,
                  margin: "-180px 0px",
                }}
              >
                <h2>Responsive Design</h2>
                <p>
                  Mobile-friendly designs that work perfectly on every device.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{
                  once: true,
                  margin: "-180px 0px",
                }}
              >
                <h2>Website Maintenance</h2>
                <p>
                  Regular updates, bug fixing, and performance optimization.
                </p>
              </motion.div>
            </div>
          </div>
          <div className="whyUs">
            <span className="left3">
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{
                  once: true,
                  margin: "-100px 0px",
                }}
              >
                Why business chooses WebMitra Studio
              </motion.h1>
              <ul>
                <motion.li
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{
                    once: true,
                    margin: "-100px 0px",
                  }}
                >
                  Modern & Clean Design
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{
                    once: true,
                    margin: "-100px 0px",
                  }}
                >
                  Fast Loading Websites
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{
                    once: true,
                    margin: "-100px 0px",
                  }}
                >
                  SEO Friendly Structure
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{
                    once: true,
                    margin: "-100px 0px",
                  }}
                >
                  Mobile Responsive Layouts
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{
                    once: true,
                    margin: "-100px 0px",
                  }}
                >
                  Affordable Pricing
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{
                    once: true,
                    margin: "-100px 0px",
                  }}
                >
                  Custom Solutions
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{
                    once: true,
                    margin: "-100px 0px",
                  }}
                >
                  Ongoing Support
                </motion.li>
              </ul>
            </span>
            <motion.span
              className="right3"
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{
                once: true,
                margin: "-200px 0px",
              }}
            >
              <img src={roundImage} alt="roundImage" className="circleImage" />
            </motion.span>
          </div>
          <motion.div
            className="letusbuild"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{
              once: true,
              margin: "-200px 0px",
            }}
          >
            <h3>Let’s Work Together</h3>
            <h1>Need a successful project?</h1>
            <button onClick={() => setForm(true)}>
              Share your project details
            </button>
          </motion.div>
        </div>
      </div>

      <div className={`form-transition ${form ? "show" : "hide"}`}>
        <FormPage />
      </div>
    </>
  );
}
