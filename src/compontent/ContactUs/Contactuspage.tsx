import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./Contactuspage.css";
import TextField from "./TextField";
import TextAreaField from "./TextAreaField";
import emailjs from "@emailjs/browser";
import { SyncLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useState, useContext, useEffect } from "react";
import { Context } from "../../ContextAPI";
import { motion } from "framer-motion";

export function ContactUsPage() {
  let [loader, setLoader] = useState(false);
  let { setIsNavOpen } = useContext(Context);

  useEffect(() => {
    setIsNavOpen(false);
  }, [setIsNavOpen]);

  let validate = Yup.object({
    name: Yup.string().required("name is required"),
    email: Yup.string().required("email is required"),
    phone: Yup.string().required("phone is required"),
    query: Yup.string().required("query is required"),
  });

  return (
    <div className="contact">
      <div className="wrapper">
        <div className="heroSection2">
          <div className="address">
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{
                once: true,
                margin: "-100px 0px",
              }}
            >
              Contact Details
            </motion.h1>
            <div className="addressChild">
              <motion.div
                className="phone"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{
                  once: true,
                  margin: "-100px 0px",
                }}
              >
                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{
                    once: true,
                    margin: "-100px 0px",
                  }}
                >
                  Phone
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{
                    once: true,
                    margin: "-100px 0px",
                  }}
                >
                  Our customer care is open from Mon - Sat, 8:00 am to 8:00 pm
                </motion.p>
                <h2 id="no">
                  <a href="tel:+91-9548087591">+91-9548087591</a>
                </h2>
              </motion.div>

              <motion.div
                className="email"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{
                  once: true,
                  margin: "-100px 0px",
                }}
              >
                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{
                    once: true,
                    margin: "-100px 0px",
                  }}
                >
                  Email
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{
                    once: true,
                    margin: "-70px 0px",
                  }}
                >
                  Our support team will get back to you in 48-h during standard
                  business hours.
                </motion.p>
                <h2 id="emailAdd">
                  <a href="mailto:webmitrastudio@gmail.com">
                    webmitrastudio@gmail.com
                  </a>
                </h2>
              </motion.div>
            </div>
          </div>
          <Formik
            initialValues={{ name: "", email: "", phone: "", query: "" }}
            validationSchema={validate}
            onSubmit={(value) => {
              setLoader(true);
              //send to company's email
              emailjs
                .send(
                  import.meta.env.VITE_SERVICE_ID,
                  import.meta.env.VITE_TEMPLATE_ID,
                  value,
                  import.meta.env.VITE_PUBLIC_KEY,
                )
                .then(() => {
                  toast.success("Query has been sent successfully");
                  setLoader(false);
                })
                .catch(() => {
                  toast.error("something went wrong");
                  setLoader(false);
                });
            }}
          >
            <Form>
              <motion.div
                className="form"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{
                  once: true,
                  margin: "-200px 0px",
                }}
              >
                <p>We Are Here to Help You 24/7 With Our Experts </p>
                <h1>Schedule Appointment</h1>
                <TextField
                  label="Name"
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Name"
                />
                <TextField
                  label="Email"
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
                <TextField
                  label="Phone"
                  name="phone"
                  id="phone"
                  type="text"
                  placeholder="+91"
                />
                <TextAreaField
                  label="Your Query"
                  name="query"
                  id="query"
                  type="text"
                  placeholder="Query"
                />
                <button className="btn btn-primary mt-5 p-3" type="submit">
                  {!loader ? (
                    "Send Message"
                  ) : (
                    <SyncLoader loading={loader} size={8} color="white" />
                  )}
                </button>
              </motion.div>
            </Form>
          </Formik>
        </div>
        <motion.div
          className="office"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{
            once: true,
            margin: "-100px 0px",
          }}
        >
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{
                once: true,
                margin: "-100px 0px",
              }}
            >
              Our office
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{
                once: true,
                margin: "-80px 0px",
              }}
            >
              6 - yadgarpur, Pandav Nagar, ( kila road ) Meerut, Uttar Pradesh
              250001
            </motion.p>
            <h2>Uttar Pradesh, India - HQ</h2>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
