import Cookies from 'js-cookie';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

export default function DataHeader() {
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
    return (
        <div className="reset_header">
            <Link to="/" ><img src="verdant-name-logo.png" alt="" /></Link>
            {/* <Link to="/" ><img src="../../../icons/ClangSocial_Reset.png" alt="" /></Link> */}
            {user ?
                <div className="right_reset">
                    <Link to="/profile"><img src={user?.picture} alt="" /></Link>
                    <button onClick={() => { logOut() }} className="shadoww_btn">Log Out</button>
                </div>
                :
                <Link to="/login" className="right_reset">
                    <button className="shadoww_btn">Log In</button>
                </Link>
            }
        </div>
    )
}