import { Link } from "react-router-dom";


export default function SendEmail({ userInfos}) {
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
    <div className="reset_form_btns">
                            <Link to="/login" className="grey_btn">Not you</Link>
                            <button type="submit" className="blue_btn a2"> Continue</button>
                        </div>
    </div>
  )
}
