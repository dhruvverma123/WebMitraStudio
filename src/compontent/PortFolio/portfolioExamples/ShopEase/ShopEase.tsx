import second from "../../second.png";
import "./ShopEase.css";
import { motion } from "framer-motion";

function ShopEase() {
  return (
    <div className="shopease">
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
              Modern eCommerce Experience For Smart Shopping
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
              ShopEase is a stylish and user-friendly eCommerce website designed
              for modern online businesses. The website provides a seamless
              shopping experience with clean product displays, responsive
              layouts, and secure checkout functionality.
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
              The platform is designed to make online shopping simple, fast, and
              visually engaging for customers across all devices.
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
              The website combines modern UI design with fast performance and
              mobile optimization to ensure users enjoy a smooth shopping
              journey.
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
              A modern online shopping website designed to deliver smooth user
              experience and attractive product presentation.
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
            <img src={second} alt="" />
          </motion.span>
        </div>
      </div>
    </div>
  );
}

export default ShopEase;
