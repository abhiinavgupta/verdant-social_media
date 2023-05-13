import { useState } from "react";
import { Form, Formik } from "formik";
import LoginInput from "../../components/inputs/logininput";
import "./style.css";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

export default function SearchAccount({ email, setEmail, error, setError, loading, setLoading, setUserInfos, setVisible }) {
    const validateEmail = Yup.object({
        email: Yup.string()
            .required("Enter the Email address!")
            .email("Enter valid Email address!")
    })

    const handleSearch = async () => {
        try {
            setLoading(true);
            const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/findUser`, { email });
            setError("");
            setUserInfos(data);
            setLoading(false);
            setVisible(1);
        }
        catch (error) {
            setLoading(false);
            setError(error.response.data.message);
        }
    }

  return (
    
    <div className="reset_form dynamic_height">
            <div className="reset_form_header">Find your Account</div>
            <div className="reset_form_text">Please enter your Email address to search for your account</div>
            <Formik 
            enableReinitialize
                initialValues={{ email }}
                validationSchema={validateEmail}
                onSubmit={() => {
                    handleSearch();
                }}
            >
                {(formik) => (
                    <Form>
                        <LoginInput
                            type="text"
                            name="email"
                            placeholder="Enter your email here..."
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {error && <div className="error_text">{error}</div>}
                        <div className="reset_form_btns">
                            <Link to="/login" className="grey_btn">cancel</Link>
                            <button type="submit" className="blue_btn a2"> search</button>
                        </div>
                        </Form>
                        
                )}
            </Formik>

            </div>
  )
}
