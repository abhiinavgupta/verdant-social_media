import { Link, useNavigate } from "react-router-dom";
import "./style.css"
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useState } from "react";
import { Form, Formik } from "formik";
import LoginInput from "../../components/inputs/logininput";
import SearchAccount from "./SearchAccount";
import SendEmail from "./SendEmail";
import CodeVerification from "./CodeVerification";
import ChangePassword from "./ChangePassword";
import Footer from "../../components/login/footer";
// import SearchAccount from "./SearchAccount";
// import SendEmail from "./SendEmail";
// import CodeVerification from "./CodeVerification";
// import Footer from "../../components/login/Footer";
// import ChangePassword from "./ChangePassword";


export default function Reset() {
    const { user } = useSelector((state) => ({ ...state }));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logOut = () => {
        Cookies.set("user", "");
        dispatch({
            type: "LOGOUT",
        });
        navigate("/");
    };

    const [visible, setVisible] = useState(0);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [userInfos, setUserInfos] = useState("");

  return (
    <div className="reset">
            <div className="reset_header">
                
                
                <Link to="/">
                <img className="name_logo" src="verdant-name-logo.png" alt="header" />
                </Link>

                {user ? (
                    <div className="right_reset">
                        <Link to="/profile"><img src={user?.picture} alt="" /></Link>
                        <button onClick={() => { logOut() }} className="blue_btn a1">Log Out</button>
                    </div>
                   ) : (
                <Link to="/login" className="right_reset">
                    <button className="blue_btn a1" >Login</button>
                </Link>)
                }
                
            </div>
            <div className="reset_wrap">
            {visible === 0 && <SearchAccount  
                email={email}
                setEmail={setEmail}
                error={error}
                setError={setError}
                loading={loading}
                setLoading={setLoading}
                setUserInfos={setUserInfos}
                setVisible={setVisible}
                />}
                {visible === 1 && userInfos &&
                    <SendEmail
                        email={email}
                        userInfos={userInfos}
                        error={error}
                        setError={setError}
                        loading={loading}
                        setLoading={setLoading}
                        setUserInfos={setUserInfos}
                        setVisible={setVisible}
                    />
                }
                {visible === 2 &&
                    <CodeVerification
                    user={user}
                        code={code}
                        userInfos={userInfos}
                        setCode={setCode}
                        error={error}
                        setError={setError}
                        loading={loading}
                        setLoading={setLoading}
                        setVisible={setVisible}
                    />
                }
                {visible === 3 &&
                    <ChangePassword
                        userInfos={userInfos}
                        password={password}
                        setPassword={setPassword}
                        confirmPassword={confirmPassword}
                        setConfirmPassword={setConfirmPassword}
                        error={error}
                        setError={setError}
                        loading={loading}
                        setLoading={setLoading}
                    />
                }
            </div>
            <Footer />
    </div>
    )
}
