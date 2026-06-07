import first from "../../first.png";
import "./Bizgrow.css";
import { motion } from "framer-motion";

function BizGrow() {
  return (
    <div className="bizgrow">
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
              Helping Businesses Build a Strong Digital Presence
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{
                once: true,
                margin: "-100px 0px",
              }}
            >
              BizGrow is a modern corporate business website designed for
              companies that want to establish a professional and trustworthy
              online identity. With a clean interface, responsive design, and
              performance-focused structure, the website helps businesses
              showcase their services effectively and connect with potential
              clients.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{
                once: true,
                margin: "-100px 0px",
              }}
            >
              The design focuses on simplicity, smooth navigation, and
              user-friendly layouts that create a strong first impression for
              visitors.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{
                once: true,
                margin: "-100px 0px",
              }}
            >
              The website includes modern UI sections, service showcases,
              call-to-action areas, and contact functionality designed to
              improve customer engagement.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{
                once: true,
                margin: "-100px 0px",
              }}
            >
              A professional business website built to help companies grow their
              online presence with modern design and performance.
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
            <img src={first} alt="image" />
          </motion.span>
        </div>
      </div>
    </div>
  );
}

export default BizGrow;
