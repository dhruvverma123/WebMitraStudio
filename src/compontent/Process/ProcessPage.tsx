import "./ProcessPage.css";
import firstStep from "./prototype-323.png";
import process5 from "./Process-5.png";
import process6 from "./Process-6.png";
import reserve from "./reservhej5.png";
import code from "./code.png";
import designer from "./designer-59-1-1024x1024.png";
import problemSolving from "./problem-solving-5-67-1-1024x1024.png";
import test from "./test.png";
import taskpro from "./taskpro.png";
import alex from "./alex.png";
import shopease from "./shopease_logo.webp";
import bizgrow from "./bizgrow.jpg";
import foodvilla from "./foodvilla.jpg";
import { Context } from "../../ContextAPI";
import { useContext, useEffect } from "react";
import { FormPage } from "../Form";
import { delay, motion } from "framer-motion";

export function ProcessPage() {
  let { form, setForm, setIsNavOpen } = useContext(Context);

  useEffect(() => {
    setIsNavOpen(false);
  }, [setIsNavOpen]);

  return (
    <>
      <div className={form ? "bg-blur" : "process"}>
        <div className="wrapper">
          <div className="hero">
            <div>
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{
                  once: true,
                  margin: "-200px 0px",
                }}
              >
                Developing Web apps that can grow effectively
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{
                  once: true,
                  margin: "-200px 0px",
                }}
              >
                Works well for brands of every <span>scale!</span>
              </motion.p>
              <div>
                <motion.img
                  src={bizgrow}
                  alt=""
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{
                    once: true,
                    margin: "-100px 0px",
                  }}
                />
                <motion.img
                  src={shopease}
                  alt=""
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{
                    once: true,
                    margin: "-100px 0px",
                  }}
                />
                <motion.img
                  src={taskpro}
                  alt=""
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{
                    once: true,
                    margin: "-100px 0px",
                  }}
                />
                <motion.img
                  src={alex}
                  alt=""
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{
                    once: true,
                    margin: "-100px 0px",
                  }}
                />
                <motion.img
                  src={foodvilla}
                  alt=""
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{
                    once: true,
                    margin: "-100px 0px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="firstStep">
            <div className="left">
              <motion.h5
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{
                  once: true,
                  margin: "-150px 0px",
                }}
              >
                #FIRSTSTEP
              </motion.h5>
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{
                  once: true,
                  margin: "-150px 0px",
                }}
              >
                Everything begins with research
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{
                  once: true,
                  margin: "-150px 0px",
                }}
              >
                We ensure that user needs are understood, technology choices are
                optimal, and design elements are crafted with purpose.
              </motion.p>
              <hr />
            </div>
            <motion.div
              className="right"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{
                once: true,
                margin: "-200px 0px",
              }}
            >
              <img src={firstStep} alt="" />
            </motion.div>
          </div>
          <div className="someStep">
            <motion.div
              initial={{ opacity: 0, scale: 0.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{
                once: true,
                margin: "-150px 0px",
              }}
            >
              <span>
                <i className="fa-solid fa-bolt"></i>
              </span>
              <h2>Demand</h2>
              <p>
                We assess usage trends to understand user demand frequency and
                quantity.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{
                once: true,
                margin: "-150px 0px",
              }}
            >
              <span>
                <i className="fa-regular fa-star"></i>
              </span>
              <h2>Brainstorming</h2>
              <p>
                It enables teams to explore possibilities, refine concepts, and
                digital experiences.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{
                once: true,
                margin: "-150px 0px",
              }}
            >
              <span>
                <i className="fa-solid fa-tower-broadcast"></i>
              </span>
              <h2>Viability</h2>
              <p>
                We develop a staged product plan that balances scalability with
                costs.
              </p>
            </motion.div>
          </div>
          <div className="secondStep">
            <div>
              <motion.h5
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{
                  once: true,
                  margin: "-150px 0px",
                }}
              >
                #SECONDSTEP
              </motion.h5>
              <motion.h1
                className="heading"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{
                  once: true,
                  margin: "-150px 0px",
                }}
              >
                We Start Building Software Product
              </motion.h1>
              <motion.p
                className="paragraph"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{
                  once: true,
                  margin: "-150px 0px",
                }}
              >
                We start building software products with a robust model that
                ensures scalability .
              </motion.p>
              <div className="modelDiv">
                <div className="outerDiv">
                  <motion.div
                    className="innerDiv1"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{
                      once: true,
                      margin: "-150px 0px",
                    }}
                  >
                    <img src={process5} alt="" />
                  </motion.div>
                  <div className="innerDiv2">
                    <motion.h2
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{
                        once: true,
                        margin: "-150px 0px",
                      }}
                    >
                      Agile model
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{
                        once: true,
                        margin: "-150px 0px",
                      }}
                    >
                      We build software products using an Agile model with
                      sprints, user stories for flexibility and efficiency.
                    </motion.p>
                  </div>
                </div>
                <div className="outerDiv">
                  <motion.div
                    className="innerDiv1"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{
                      once: true,
                      margin: "-150px 0px",
                    }}
                  >
                    <img src={process6} alt="" />
                  </motion.div>
                  <div className="innerDiv2">
                    <motion.h2
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{
                        once: true,
                        margin: "-150px 0px",
                      }}
                    >
                      Waterfall model
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{
                        once: true,
                        margin: "-150px 0px",
                      }}
                    >
                      Each phase must be completed before moving to the next,
                      ensuring a structured process and clear documentation.
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="thirdStep">
            <motion.div
              className="leftTurn"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{
                once: true,
                margin: "-150px 0px",
              }}
            >
              <img src={reserve} alt="" />
            </motion.div>
            <div className="rightTurn">
              <motion.h5
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{
                  once: true,
                  margin: "-150px 0px",
                }}
              >
                #Thirdstep
              </motion.h5>
              <motion.h1
                className="heading"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{
                  once: true,
                  margin: "-150px 0px",
                }}
              >
                A static prototype is designed
              </motion.h1>
              <motion.p
                className="paragraph"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{
                  once: true,
                  margin: "-150px 0px",
                }}
              >
                It allows stakeholders to review the overall design, layout, and
                content structure, ensuring alignment with project goals.
              </motion.p>
              <div className="quantity">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{
                    once: true,
                    margin: "-150px 0px",
                  }}
                >
                  <h1>low</h1>
                  <p>fidelity wireframes</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{
                    once: true,
                    margin: "-150px 0px",
                  }}
                >
                  <h1>high</h1>
                  <p>fidelity app mockups</p>
                </motion.div>
              </div>

              <a href="tel:+91-9548087591">
                <motion.button
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{
                    once: true,
                    margin: "-150px 0px",
                  }}
                >
                  {" "}
                  Get on a call with us{" "}
                </motion.button>
              </a>
            </div>
          </div>
          <div className="fourthStep">
            <div className="left">
              <motion.h5
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{
                  once: true,
                  margin: "-150px 0px",
                }}
              >
                #FOURTHSTEP
              </motion.h5>
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{
                  once: true,
                  margin: "-150px 0px",
                }}
              >
                We Establish the app Environment.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{
                  once: true,
                  margin: "-150px 0px",
                }}
              >
                DevOps specialists establish your server, database, and Git,
                among other components, enabling developers to excel at what
                they do best.
              </motion.p>
              <motion.h5
                className="smile"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{
                  once: true,
                  margin: "-150px 0px",
                }}
              >
                CODE WITH TRANQUILITY 🙂
              </motion.h5>
            </div>
            <motion.div
              className="right"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{
                once: true,
                margin: "-150px 0px",
              }}
            >
              <img src={code} alt="" />
            </motion.div>
          </div>
          <div className="fifthStep">
            <motion.h5
              className="h5"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{
                once: true,
                margin: "-150px 0px",
              }}
            >
              #FIFTHSTEP
            </motion.h5>
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{
                once: true,
                margin: "-150px 0px",
              }}
            >
              Active Code Creation
            </motion.h1>
            <div className="first1">
              <motion.div
                className="left"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{
                  once: true,
                  margin: "-150px 0px",
                }}
              >
                <img src={designer} alt="" />
              </motion.div>
              <div className="right">
                <motion.h5
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{
                    once: true,
                    margin: "-150px 0px",
                  }}
                >
                  [ FRONT-END ]
                </motion.h5>
                <div>
                  <motion.h4
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{
                      once: true,
                      margin: "-150px 0px",
                    }}
                  >
                    UI implementation
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{
                      once: true,
                      margin: "-150px 0px",
                    }}
                  >
                    We render design mockups into functional interfaces by
                    employing the chosen technologies.
                  </motion.p>
                </div>
                <div>
                  <motion.h4
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{
                      once: true,
                      margin: "-150px 0px",
                    }}
                  >
                    User interaction design
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{
                      once: true,
                      margin: "-150px 0px",
                    }}
                  >
                    We design user interactions, including animations and
                    transitions, to enhance user engagement.
                  </motion.p>
                </div>
              </div>
            </div>
            <div className="second1">
              <div className="left">
                <motion.h5
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{
                    once: true,
                    margin: "-150px 0px",
                  }}
                >
                  [ BACK-END ]{" "}
                </motion.h5>
                <div>
                  <motion.h4
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{
                      once: true,
                      margin: "-150px 0px",
                    }}
                  >
                    Server side development
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{
                      once: true,
                      margin: "-150px 0px",
                    }}
                  >
                    Necessary API endpoints for functionalities are evaluated,
                    and server-side logic is developed.
                  </motion.p>
                </div>
                <div>
                  <motion.h4
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{
                      once: true,
                      margin: "-150px 0px",
                    }}
                  >
                    API development
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{
                      once: true,
                      margin: "-150px 0px",
                    }}
                  >
                    We specify, construct, and test APIs, guaranteeing seamless
                    functionality across all features.
                  </motion.p>
                </div>
              </div>
              <motion.div
                className="right"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{
                  once: true,
                  margin: "-150px 0px",
                }}
              >
                <img src={problemSolving} alt="" />
              </motion.div>
            </div>
            <div className="loveourprocess">
              <motion.h3
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{
                  once: true,
                  margin: "-150px 0px",
                }}
              >
                Lastly, integration of front and back ends.
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{
                  once: true,
                  margin: "-150px 0px",
                }}
              >
                Once the server logic and APIs are created, we link them to our
                static app to bring it to life.
              </motion.p>

              <a href="tel:+91-9548087591">
                <motion.button
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{
                    once: true,
                    margin: "-150px 0px",
                  }}
                >
                  Get on a call with us
                </motion.button>
              </a>
            </div>
          </div>
          <div className="sixthStep">
            <div className="left">
              <motion.h5
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{
                  once: true,
                  margin: "-150px 0px",
                }}
              >
                #SIXTHSTEP
              </motion.h5>
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{
                  once: true,
                  margin: "-150px 0px",
                }}
              >
                We Launch a Stable Version
              </motion.h1>
              <motion.p
                className="parah"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{
                  once: true,
                  margin: "-150px 0px",
                }}
              >
                We launch a stable version, ensuring all features are fully
                functional and ready for user engagement.
              </motion.p>
              <hr />
              <div className="divider">
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{
                    once: true,
                    margin: "-150px 0px",
                  }}
                >
                  <h2>Testing</h2>
                  <span>
                    <h5>#StaticTesting</h5>
                  </span>
                  <p className="paraDiv">Our QA team searches for issues</p>
                  <p className="minusDiv">Load Testing</p>
                  <p className="minusDiv">Integration Testing</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{
                    once: true,
                    margin: "-150px 0px",
                  }}
                >
                  <h2>Refining</h2>
                  <span>
                    <h5>#CodeRefinement</h5>
                  </span>
                  <p className="paraDiv">
                    Engage a specialized team for your app
                  </p>
                  <p className="minusDiv">Code Optimization</p>
                  <p className="minusDiv">Quality Assurance</p>
                </motion.div>
              </div>
            </div>
            <motion.div
              className="right"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{
                once: true,
                margin: "-150px 0px",
              }}
            >
              <img src={test} alt="" />
            </motion.div>
          </div>
          <div className="loveourprocess2">
            <motion.div
              initial={{ opacity: 0, scale: 0.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{
                once: true,
                margin: "-150px 0px",
              }}
            >
              <h1>Love our process?</h1>
              <p>You will go crazy, seeing our execution.</p>
              <button onClick={() => setForm(true)}>DISCUSS YOUR IDEA</button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className={`form-transition ${form ? "show" : "hide"}`}>
        <FormPage />
      </div>
    </>
  );
}
