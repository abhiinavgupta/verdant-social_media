
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import LoginInput from "../../components/inputs/logininput";
import { useState } from "react";
const loginInfos = {
    email:"",
    password:"",
};

export default function LoginForm() {
    const[login, setLogin]= useState(loginInfos);
    const{email, password}= login ;

    
    const handleLoginChange = (e) => {
        const {name, value} = e.target;
        setLogin({ ...login, [name]: value});
    };
    const loginValidation=Yup.object({
        email: Yup.string().required("Email address is required.").email("Must be a valid email."),
        password:Yup.string().required("Password is required"),
    });
  return (
    
    <div className="login_wrap">
        <div className="login_1">
            <img src="../../icons/facebook.svg" />
            <span>
                VERDANT helps you connect and share with people who loves mother nature.
            </span>
        </div>
        <div className="login_2">
            <div className="login_2_wrap">
                <Formik
                enableReinitialize
                initialValues={{
                        email,
                        password,
                }}
                validationSchema={loginValidation}

                >
                {(formik) => (
                    <Form>
                    <LoginInput type="text" name="email" placeholder="email address or phone number" onChange={handleLoginChange} />
                    <LoginInput type="password" name="password" placeholder="password" onChange={handleLoginChange} bottom />
                    <button type="submit" className="blue_btn"> Log In</button>
                    </Form>
                )}
                 </Formik>
                 <Link to="/forgot" className="forget_password">Forgotten Password?</Link>
                 <div className="sign_splitter"></div>
                 <div className="blue_btn open_signup">Create Account</div>
            </div>
            <Link to="/" className="sign_extra">
                <b>Create a page </b>
                for a Celebrity, Brand or business.
            </Link>
        </div>
    </div>
  )
}
