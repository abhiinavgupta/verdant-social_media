
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import LoginInput from "../../components/inputs/logininput";
import { useState } from "react";
import ClockLoader from "react-spinners/ClockLoader";
import axios from "axios";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const loginInfos = {
    email:"",
    password:"",
};

export default function LoginForm({setVisible}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
    const [error, setError]= useState("");
    const [loading, setLoading]= useState(false);
    const loginSubmit = async () =>{
        try {
            setLoading(true);
            const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`,{
                email,password,
            });
            const { message, ...rest} = data;
            dispatch({type:"LOGIN", payload: data});
            Cookies.set("user" , JSON.stringify(data));
            navigate("/");
        } catch (error) {
            setLoading(false);
            setError(error.response.data.message)
        }
    };
    
        
  return (
    
    <div className="login_wrap">
        <div className="login_1">
            <img src="../../icons/facebook.svg" alt="VERDANT" />
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
                onSubmit={()=>{
                    loginSubmit();
                }}
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
                 <ClockLoader color="#7fa99b" loading={loading} size={30} aria-label="Loading Spinner" data-testid="loader" />
                 {error &&<div className="error_text"> {error}</div>} 
                 <div className="sign_splitter"></div>
                 <div className="blue_btn open_signup" onClick={() => setVisible(true)}>Create Account</div>
            </div>
            <Link to="/" className="sign_extra">
                <b>Create a page </b>
                for a Celebrity, Brand or business.
            </Link>
        </div>
    </div>
  )
}
