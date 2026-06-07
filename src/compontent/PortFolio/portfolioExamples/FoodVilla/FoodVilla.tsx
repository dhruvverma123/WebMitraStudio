import third from "../../third.png";
import "./FoodVilla.css";
import { motion } from "framer-motion";

function FoodVilla() {
  return (
    <div className="foodvilla">
      <div className="wrapper">
        <div className="heroSection">
          <span>
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{
                once: true,
                margin: "-100px 0px",
              }}
            >
              Bringing Restaurants Closer To Customers
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
              FoodVilla is a premium restaurant website designed to create a
              modern and engaging online experience for food businesses. The
              website combines attractive visuals, elegant layouts, and
              responsive design to showcase menus, services, and reservations
              beautifully.
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
              The project focuses on delivering a stylish digital presence that
              attracts customers and improves online engagement.
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
              The website highlights food categories, customer experience, and
              branding with clean and modern UI components.
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
              FoodVilla was created for a restaurant brand that wanted a modern
              website to display food menus, restaurant ambiance, and online
              reservation features. The goal was to create a visually appealing
              platform with smooth navigation and mobile-friendly layouts.
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
              A stylish restaurant website designed to showcase food,
              atmosphere, and customer experience professionally online.
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
            <img src={third} alt="" />
          </motion.span>
        </div>
      </div>
    </div>
  );
}

export default FoodVilla;
