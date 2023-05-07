import "./style.css";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import LoginInput from "../../components/inputs/logininput";
import { useState } from "react";
const loginInfos = {
    email:"",
    password:"",
}
export default function Login() {
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
    <div className="login">
    <div className="login_wrapper">
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
        <div className="register"></div>
        <footer className="login_footer">
            <div className="login_footer_wrap">
                <Link to="/" > english </Link>
                <Link to="/" > english </Link>
                <Link to="/" > english </Link>
                <Link to="/" > english </Link>
                <Link to="/" > english </Link>
                <Link to="/" > english </Link>
                <Link to="/" > english </Link>
                <Link to="/" > english </Link>
                <Link to="/" > english </Link>
                <Link to="/" className="footer_square" >
                    <i className="plus_icon"></i>
                </Link>

            </div>
            <div className="footer_splitter"></div>
            <div className="login_footer_wrap">
            <Link to="/">Sign Up</Link>

<Link to="/">Log in</Link>
<Link to="/">Watch </Link>
<Link to="/">Places</Link>
<Link to="/">Marketplace</Link>
<Link to="/">  Oculus </Link>

<Link to="/">  Portal</Link>

<Link to="/">  Instagram</Link>

<Link to="/">  Bulletin</Link>

<Link to="/">  Local</Link>

<Link to="/">  Fundraisers </Link>

<Link to="/">  Services</Link> 
<Link to="/">  Voting Information Centre</Link>

<Link to="/">  Groups </Link>

<Link to="/">  About</Link>

<Link to="/">  Create ad</Link>

<Link to="/">  Create Page</Link>

<Link to="/">  Developers </Link>
<Link to="/">
AdChoices
    <i className="adChoices_icon"></i>
</Link>
<Link to="/">  Careers</Link>

<Link to="/">  Privacy</Link> <Link to="/">  Cookies</Link>

            </div>
<div className="login_footer_wrap" style={{fontSize:"12px", marginTop:"10px"}}> Abhinav Gupta Ⓒ 2023</div>
        </footer>
    </div>

    </div>
);
}
