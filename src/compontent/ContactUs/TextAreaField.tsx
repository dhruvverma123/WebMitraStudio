import { useField, ErrorMessage } from "formik";
import "./TextAreaField.css";

function TextAreaField({ label, ...props }: any) {
  let [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={field.name} className="mt-3">
        {label}
      </label>
      <textarea
        className={`form-control shadow-none mt-2 ${meta.touched && meta.error && "is-invalid"}`}
        {...props}
        {...field}
        rows={4}
        autoComplete="off"
      ></textarea>
      <ErrorMessage component="div" name={field.name} className="error" />
    </>
  );
}

export default TextAreaField;
