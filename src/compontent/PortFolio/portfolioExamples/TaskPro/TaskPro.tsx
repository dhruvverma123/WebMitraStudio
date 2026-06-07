import fourth from "../../fourth.png";
import "./TaskPro.css";
import { motion } from "framer-motion";

function TaskPro() {
  return (
    <div className="taskpro">
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
              Smart Dashboard Solutions For Modern Businesses
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
              TaskPro is a modern SaaS dashboard website created for startups,
              software companies, and productivity platforms. The website
              features a clean dashboard interface, analytics sections, and
              modern UI components that improve workflow management.
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
              The design focuses on simplicity, clarity, and performance to
              provide users with an efficient digital experience.
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
              The dashboard structure was designed to improve usability while
              maintaining a sleek and modern appearance.
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
              TaskPro was designed for a software-based business looking for a
              professional dashboard platform with modern visuals and scalable
              layouts.
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
              A modern SaaS dashboard website designed for startups and
              productivity-based businesses.
            </motion.p>
          </span>
          <motion.span
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{
              once: true,
              margin: "-200px 0px",
            }}
          >
            <img src={fourth} alt="" />
          </motion.span>
        </div>
      </div>
    </div>
  );
}

export default TaskPro;
