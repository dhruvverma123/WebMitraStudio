import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "./ContactUs/TextField";
import TextAreaField from "./ContactUs/TextAreaField";
import emailjs from "@emailjs/browser";
import { SyncLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useState, useContext } from "react";
import { Context } from "./../ContextAPI";
import "./Form.css";
import CloseIcon from "@mui/icons-material/Close";

export function FormPage() {
  let { setForm } = useContext(Context);
  let [loader, setLoader] = useState(false);

  let validate = Yup.object({
    name: Yup.string().required("name is required"),
    email: Yup.string().required("email is required"),
    phone: Yup.string().required("phone is required"),
    query: Yup.string().required("query is required"),
  });

  return (
    <div className="mainForm">
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
          <div className="form12">
            <CloseIcon className="close" onClick={() => setForm(false)} />
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
            <button className="btn btn-primary" type="submit">
              {!loader ? (
                "Send Message"
              ) : (
                <SyncLoader loading={loader} size={8} color="white" />
              )}
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
