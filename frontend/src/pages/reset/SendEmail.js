import { Link } from "react-router-dom";
import axios from "axios";

export default function SendEmail({ email, userInfos, error, setError, loading, setLoading, setUserInfos, setVisible}) {
    const sendEmail = async () => {
        try {
            setLoading(true);
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/sendResetPasswordCode`, { email });
            setError("");
            setVisible(2);
            setLoading(false);
        }
        catch (error) {
            setLoading(false);
            setError(error.response.data.message);
        }
    }
  return (
    <div className="reset_form dynamic_height" >
    <div className="reset_form_header">Reset your password</div>
    <div className="reset_grid">
        <div className="reset_left">
            <div className="reset_form_text">
                How do you want to receive your your password?
            </div>
            <label htmlFor="email" className="a6 hover4">
                <input type="radio" name="" id="email" checked readOnly />
                <div className="label_col">
                    <span>send code via email</span>
                    <span>{userInfos?.email}</span>
                </div>
            </label>
        </div>
        <div className="reset_right a5">
            <img src={userInfos?.picture} alt="" />
            <span className="a3">gabhinav133@gmail.com</span>
            {/* <span className="a3">Facebook User</span> */}
            <div className="flex_name">
                        <span>{userInfos?.first_name}</span> <span>{userInfos?.last_name}</span>
                    </div>
        </div>
        
        
    </div>
    {error && <div className="error_text">{error}</div>}
    <div className="reset_form_btns">
                            <Link to="/login" className="grey_btn">Not you</Link>
                            <button onClick={()=>{
                                sendEmail();
                            }} className="blue_btn a2"> Continue</button>
                        </div>
    </div>
  )
}
