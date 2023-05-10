import { Form, Formik } from "formik";
import RegisterInput from "../inputs/registerinput";
import { useState } from "react";
import { date } from "yup";
import * as Yup from "yup";
import DateofBirth from "./DateofBirth";
import GenderSelect from "./GenderSelect";
import ClockLoader from "react-spinners/ClockLoader";
import axios from "axios";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function RegisterForm({setVisible}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userInfos={
        first_name: "",
        last_name: "",
        email: "",
        password:"",
        bYear: new Date().getFullYear(),
        bMonth: new Date().getMonth() + 1,
        bDay:new Date().getDate(),
        gender:""
    };
    const [user, setUser] = useState(userInfos);
    const {
        first_name,
        last_name,
        email,
        password,
        bDay,
        bMonth,
        bYear,
        gender
    } = user;
    const yearTemp = new Date().getFullYear();
    const handleRegisterChange=(e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value})
    }


const years = Array.from(new Array(108),(val, index)=> yearTemp - index);
const month = Array.from(new Array(12),(val, index)=> 1 + index);
// const getDays = () => {
//     return new Date(bYear, bMonth, 0).getDate();
// };
const getDays = () => {
    return new Date(bYear, bMonth, 0).getDate();
}

const days = Array.from(new Array(getDays()), (val, index) => 1 + index);
const registerValidation = Yup.object({
    first_name: Yup.string().required("What is your first name ?")
        .min(2, "first name must be at least 2 characters.")
        .max(16, "first name must be shorter than 16 characters.")
        .matches(/^[aA-zZ\s]+$/, "Numbers and special characters are not allowed."),
        last_name: Yup.string().required("What is your last name ?")
        .min(2, "last name must be at least 2 characters.")
        .max(16, "last name must be shorter than 16 characters.")
        .matches(/^[aA-zZ\s]+$/, "Numbers and special characters are not allowed."),
        email: Yup.string().required("You will need this when you log in or you ever wanted to reset you password.")
        .email("Enter a valid email address."),
        password: Yup.string().required("Enter a combination of at least six numbers, letters and punctuation marks(such as !,& and @)")
        .min(6, "Password must be at least six characters.")
        .max(36,"Password cannot be greater than 36 characters."),


});
const [dateError, setDateError] = useState("");
const [genderError, setGenderError] = useState("");

const [error, setError]= useState("");
const [success, setSuccess]= useState("");
const [loading, setLoading]= useState(false);


const registerSubmit = async() => {
    try {
        const {data} = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`,
        {
            first_name,
            last_name,
            email,
            password,
            bDay,
            bMonth,
            bYear,
            gender
        });
        setError("");
        setSuccess(data.message);
        const { message, ...rest} = data;
        setTimeout(() => {
            dispatch({type:"LOGIN", payload: rest});
            Cookies.set("user" , JSON.stringify(rest));
            navigate("/");
        },2000);
        

    } catch (error) {
        setLoading(false);
        setSuccess("");
        setError(error.response.data.message);
    }
};
  return (
    <div className="blur">
        <div className="register">
            <div className="register_header">
                <i className="exit_icon" onClick={() => setVisible(false)}></i>
                <span>Sign Up</span>
                <span>It's quick and easy</span>
            </div>
            <Formik
            enableReinitialize
            initialValues={{
                first_name,
                last_name,
                email,
                password,
                bDay,
                bMonth,
                bYear,
                gender
                
            }}
            validationSchema={registerValidation}
            on onSubmit={()=>{
                let current_date = new Date();
                let picked_date = new Date(bYear, bMonth - 1, bDay);
                let atleast14 =  new Date(1970+ 14, 0, 1);
                let noMoreThan70 = new Date(1970 + 70, 0, 1);
                if (current_date - picked_date < atleast14){
                    setDateError("It looks like you are underage to make an account on verdant.");
                } else if ( current_date - picked_date > noMoreThan70){
                    setDateError("It looks like you are overage to make an account on verdant.");
                } else if (gender === '') {
                    setDateError("");
                    setGenderError("Please select gender.");
                } else {
                    setDateError("");
                    setGenderError("");
                    registerSubmit();
                }
            }}
            >
            
                {
                    (Formik) =>(
                        <Form className="register_form">
                        <div className="reg_line">
                            <RegisterInput type="text" placeholder="First name" name="first_name" onChange={handleRegisterChange} />
                            <RegisterInput type="text" placeholder="Surname" name="last_name" onChange={handleRegisterChange} />
                        </div>
                        <div className="reg_line">
                        <RegisterInput type="text" placeholder="Email address" name="email" onChange={handleRegisterChange} />
                        </div>
                        <div className="reg_line">
                        <RegisterInput type="password" placeholder="New Password" name="password" onChange={handleRegisterChange} />
                        </div>
                        <div className="reg_col">
                            <div className="reg_line_header">
                                Date of Birth <i className="info_icon"></i>
                            </div>
                            <DateofBirth bDay={bDay} bMonth={bMonth} bYear={bYear} days={days} month={month} years={years} handleRegisterChange={handleRegisterChange} dateError={dateError} />
                            {/* <div className="reg_grid">
                                <select name="bDay" value={bDay} onChange={handleRegisterChange}>
                                {days.map((day, i) =>(
                                    <option value={day} key={i}> {day} </option>
                                ))}
                                </select>
                                <select name="bMonth" value={bMonth} onChange={handleRegisterChange}>
                                {month.map((month,i) =>(
                                    <option value={month} key={i}> {month}</option>
                                ))}

                                </select>
                                <select name="bYear" value={bYear} onChange={handleRegisterChange}>
                                    {years.map((year, i) => (
                                        <option value={year} key={i}> {year}</option>
                                   ))}
                                </select>
                                {dateError && <div className="input_error"> {dateError} </div>}
                            </div> */}
                        </div>
                        <div className="reg_col">
                        <div className="reg_line_header">
                                Gender <i className="info_icon"></i>
                            </div>
                            <GenderSelect handleRegisterChange={handleRegisterChange} genderError={genderError} />
                            {/* <div className="reg_grid">
                                <label htmlFor="male">
                                Male
                                <input type="radio" name="gender" id="male" value="male" onChange={handleRegisterChange} ></input>
                                </label>
                                <label htmlFor="female">
                                Female
                                <input type="radio" name="gender" id="female" value="female" onChange={handleRegisterChange} ></input>
                                </label>
                                <label htmlFor="custom">
                                Others
                                <input type="radio" name="gender" id="custom" value="custom" onChange={handleRegisterChange} ></input>
                                </label>
                                {genderError && <div className="input_error"> {genderError} </div>}
                            </div> */}
                        </div>
                        <div className="reg_infos">
                            By clicking Sign Up, You agree to out {" "}
                            <span> Terms, Data policy &nbsp; </span> and
                            <span> Cookie policy.</span> You may receive SMS 
                            notification from us and can opt out at any time.
                        </div>
                        <div className="reg_btn_wrapper">
                        <button className="blue_btn open_signup">   Sign Up   </button>
                        </div>
                        <ClockLoader color="#7fa99b" loading={loading} size={30} aria-label="Loading Spinner" data-testid="loader" />
                        {error && <div className="error_text"> {error}</div>}
                        {success && <div className="success_text"> {success}</div>}
                        
                        </Form>
                    )
                }
            </Formik>
        </div>
    </div> 
        
            

  );
}
