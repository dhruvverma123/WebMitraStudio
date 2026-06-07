import { ErrorMessage, useField } from "formik";
import "./TextField.css";

function TextField({ label, ...props }) {
  let [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={field.name} className="form-label mt-4">
        {label}
      </label>
      <input
        className={`form-control shadow-none ${meta.touched && meta.error && "is-invalid"} `}
        {...props}
        {...field}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </>
  );
}

export default TextField;
