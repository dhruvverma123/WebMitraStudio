import fifth from "../../fifth.png";
import "./Alex.css";
import { motion } from "framer-motion";

function Alex() {
  return (
    <div className="alex">
      <div className="wrapper">
        <div className="heroSection">
          <span>
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{
                once: true,
                margin: "-200px 0px",
              }}
            >
              Creative Portfolio For Developers & Freelancers
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{
                once: true,
                margin: "-100px 0px",
              }}
            >
              Alex. is a modern personal portfolio website designed for
              developers, designers, and creative professionals who want to
              showcase their work in a clean and professional way.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{
                once: true,
                margin: "-100px 0px",
              }}
            >
              The website features minimal layouts, smooth animations, project
              galleries, and responsive sections that help highlight skills and
              achievements effectively.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{
                once: true,
                margin: "-100px 0px",
              }}
            >
              The website combines simplicity with creativity to deliver a
              professional digital portfolio experience.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{
                once: true,
                margin: "-100px 0px",
              }}
            >
              Alex. was created for a freelance developer looking to build a
              strong personal brand online. The goal was to design a clean and
              modern portfolio that presents projects, experience, and technical
              skills in a visually appealing format.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{
                once: true,
                margin: "-100px 0px",
              }}
            >
              A clean and modern portfolio website built for developers,
              designers, and freelancers to showcase their work professionally.
            </motion.p>
          </span>
          <motion.span
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{
              once: true,
              margin: "-200px 0px",
            }}
          >
            <img src={fifth} alt="image" />
          </motion.span>
        </div>
      </div>
    </div>
  );
}

export default Alex;
