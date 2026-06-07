import { Link } from "react-router";
import circle from "./circle.png";
import before_webmitra_studio from "./Before-webmitra-studio.png";
import after_webmitra_studio from "./After-webmitra-studio.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Homepage.css";
import { Context } from "../../ContextAPI";
import { useContext, useEffect } from "react";
import { FormPage } from "../Form";
import { motion } from "framer-motion";

export function Homepage() {
  let { form, setForm, setIsNavOpen } = useContext(Context);

  useEffect(() => {
    setIsNavOpen(false);
  }, [setIsNavOpen]);

  return (
    <>
      <div className={form ? "blur-bg" : "home"}>
        <div className="wrapper">
          <div className="heroHome">
            <div className="circle">
              <img src={circle} alt="" />
              <div>
                <span className="icon animate1">
                  <i className="fa-solid fa-mobile-screen"></i>
                </span>
                <span className="icon animate2">
                  <i className="fa-solid fa-cloud"></i>
                </span>
                <span className="icon animate3">
                  <i className="fa-solid fa-database"></i>
                </span>
                <span className="icon animate4">
                  <i className="fa-solid fa-brain"></i>
                </span>
                <span className="icon animate5">
                  <i className="fa-solid fa-robot"></i>
                </span>
                <span className="icon animate6">
                  <i className="fa-solid fa-laptop"></i>
                </span>
                <span className="icon animate7">
                  <i className="fa-solid fa-code"></i>
                </span>
              </div>
            </div>
            <motion.div
              className="middle"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{
                once: true,
                margin: "-200px 0px",
              }}
            >
              <h1>
                We Build
                <span> Modern </span>
                Websites For Businesses
              </h1>
              <motion.p
                id="heroParagraph"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{
                  once: true,
                  margin: "-200px 0px",
                }}
              >
                WebMitra Studio creates fast, responsive, and visually stunning
                websites designed for startups, brands, and growing businesses.
              </motion.p>
              <motion.div
                id="herobtndiv"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{
                  once: true,
                  margin: "-200px 0px",
                }}
              >
                <button
                  className="btn btn-primary"
                  onClick={() => setForm(true)}
                >
                  Get Started
                  <i className="fa-regular fa-paper-plane"></i>
                </button>
                <Link to="/portfolio">
                  <button className="btn btn-success">
                    View Portfolio <i className="fa-regular fa-eye"></i>
                  </button>
                </Link>
              </motion.div>
              <motion.div
                id="resultdiv"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{
                  once: true,
                  margin: "-200px 0px",
                }}
              >
                <div>
                  <h2>20+</h2>
                  <p>Projects</p>
                </div>

                <div>
                  <h2>10+</h2>
                  <p>Clients</p>
                </div>

                <div>
                  <h2>100%</h2>
                  <p>Responsive</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{
              once: true,
              margin: "-200px 0px",
            }}
            className="strength"
          >
            <div className="leftSide">
              <h1>Our Strengths</h1>
              <p>
                Our strengths define how we deliver reliable, innovative, and
                result-oriented software solutions. By combining technical
                expertise, strategic thinking, and a client-first mindset, we
                help businesses grow in the digital world.
              </p>
              <p>
                From planning to deployment and ongoing support, we follow
                proven processes that ensure quality, security, and continuous
                improvement in every project we deliver
              </p>
              <div>
                <span>Agile Delivery</span>
                <span>Dedicated Team</span>
                <span>Quality Control</span>
                <span>Secure by Design</span>
                <span>Smart Support</span>
              </div>
            </div>
            <div className="rightSide">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ margin: "-150px 0px" }}
                className="box"
              >
                <div className="icon">
                  <i className="fa-solid fa-user-check"></i>
                </div>
                <div>
                  <h2>Client‑Centric Development</h2>
                  <p>
                    We focus on understanding your business objectives and user
                    requirements to deliver tailored solutions that create real
                    value.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="box"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ margin: "-150px 0px" }}
              >
                <div className="icon">
                  <i className="fa-solid fa-diagram-project"></i>
                </div>
                <div>
                  <h2>Agile Delivery Process</h2>
                  <p>
                    Our agile approach enables faster development, continuous
                    feedback, and flexibility to adapt to changing business
                    needs.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="box"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ margin: "-150px 0px" }}
              >
                <div className="icon">
                  <i className="fa-solid fa-users-gear"></i>
                </div>
                <div>
                  <h2>Dedicated Expert Team</h2>
                  <p>
                    Our experienced developers, designers, and strategists bring
                    strong technical and industry knowledge to ensure project
                    success.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="box"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ margin: "-150px 0px" }}
              >
                <div className="icon">
                  <i className="fa-solid fa-headset"></i>
                </div>
                <div>
                  <h2>Smart Support & Communication</h2>
                  <p>
                    We maintain transparent communication and provide proactive
                    support throughout the entire project lifecycle.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="box"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ margin: "-150px 0px" }}
              >
                <div className="icon">
                  <i className="fa-solid fa-database"></i>
                </div>
                <div>
                  <h2>Reliable Backups & Recovery</h2>
                  <p>
                    We implement secure backup systems and recovery plans to
                    safeguard data and ensure uninterrupted business operations.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="box"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ margin: "-150px 0px" }}
              >
                <div className="icon">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <div>
                  <h2>Security & Data Protection</h2>
                  <p>
                    Industry-standard security practices are used to protect
                    sensitive data, applications, and digital infrastructure.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="box"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ margin: "-150px 0px" }}
              >
                <div className="icon">
                  <i className="fa-regular fa-circle-check"></i>
                </div>
                <div>
                  <h2>Quality Control</h2>
                  <p>
                    Every solution undergoes thorough testing and quality checks
                    to ensure performance, stability, and reliability.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="box"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ margin: "-150px 0px" }}
              >
                <div className="icon">
                  <i className="fa-solid fa-arrow-trend-up"></i>
                </div>
                <div>
                  <h2>Continuous Improvement</h2>
                  <p>
                    We continuously enhance our processes, technologies, and
                    solutions to keep your business future-ready.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <div className="conditions">
            <motion.div
              className="before_webmitra_studio"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{
                once: true,
                margin: "-250px 0px",
              }}
            >
              <h2>Before Webmitra studio</h2>
              <img src={before_webmitra_studio} alt="" />
            </motion.div>
            <motion.div
              className="after_webmitra_studio"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{
                once: true,
                margin: "-250px 0px",
              }}
            >
              <h2>After Webmitra studio</h2>
              <img src={after_webmitra_studio} alt="" />
            </motion.div>
          </div>
          <div className="happyClients">
            <h1>Happy client works</h1>
            <Swiper
              slidesPerView={1}
              spaceBetween={80}
              loop={true}
              // onTouchMove={}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="reviewsContent">
                  <h1>Rajesh Sharma — Business Owner</h1>
                  <h3>⭐️⭐️⭐️⭐️⭐️</h3>
                  <p>
                    “WebMitra Studio created an amazing website for our company.
                    The design looks modern, the speed is excellent, and the
                    entire experience was very professional.”
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="reviewsContent">
                  <h1>Priya Verma — Startup Founder</h1>
                  <h3>⭐️⭐️⭐️⭐️⭐️</h3>
                  <p>
                    “Highly impressed with the quality of work and attention to
                    detail. The website is clean, responsive, and exactly what
                    we wanted for our brand.”
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="reviewsContent">
                  <h1>Aman Gupta — eCommerce Brand</h1>
                  <h3>⭐️⭐️⭐️⭐️⭐️</h3>
                  <p>
                    “WebMitra Studio delivered a fast and user-friendly
                    eCommerce website that helped us improve our online presence
                    and customer engagement.”
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="reviewsContent">
                  <h1>Neha Kapoor — Freelancer</h1>
                  <h3>⭐️⭐️⭐️⭐️⭐️</h3>
                  <p>
                    “The portfolio website they designed for me looks absolutely
                    professional. Smooth animations, modern UI, and great
                    support throughout the project.”
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="reviewsContent">
                  <h1>Vikram Singh — Restaurant Owner</h1>
                  <h3>⭐️⭐️⭐️⭐️⭐️</h3>
                  <p>
                    “Very creative and supportive team. Our restaurant website
                    now looks premium and works perfectly on mobile devices as
                    well.”
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="talent">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0 }}
              viewport={{
                once: true,
                margin: "-180px 0px",
              }}
            >
              <i className="fa-solid fa-briefcase"></i>
              <p> Qualified talent</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{
                once: true,
                margin: "-180px 0px",
              }}
            >
              <i className="fa-solid fa-clock-rotate-left"></i>
              <p>Quick turnaround time</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{
                once: true,
                margin: "-180px 0px",
              }}
            >
              <i className="fa-solid fa-square-pen"></i>
              <p>Risk-free plans</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{
                once: true,
                margin: "-180px 0px",
              }}
            >
              <i className="fa-regular fa-calendar-check"></i>
              <p> 100% satisfaction guaranteed</p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{
              once: true,
              margin: "-180px 0px",
            }}
            className="letusbuild"
          >
            <h3>Let’s Work Together</h3>
            <h1>Need a successful project?</h1>
            <button onClick={() => setForm(true)}>
              Share your project details
            </button>
          </motion.div>
        </div>
      </div>

      <div className={`form-container ${form ? "show" : "hide"}`}>
        <FormPage />
      </div>
    </>
  );
}
