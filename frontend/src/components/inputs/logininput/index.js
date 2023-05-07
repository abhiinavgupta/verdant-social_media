
import "./style.css";
import { useField, ErrorMessage } from "formik";
export default function LoginInput({ placeholder, ...props }) {
  const [field, meta] = useField(props);
  return (
    
    <div className="input_wrap">
    <div className="input_error">
      {
       meta.touched && meta.error && <ErrorMessage name={field.name} />
      }
    </div>
    <input 
        className={meta.touched && meta.error ?  "input_error_border":""}
        type={field.type} 
        name={field.name} 
        placeholder={placeholder} 
        {...field} {...props} 
      />
      {meta.touched && meta.error && <i className="error_icon"></i>}
    </div>
  );
}

/* <input type="text" />
                    <input type="text" /> */