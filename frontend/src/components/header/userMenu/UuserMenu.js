import { useState } from "react";
import { Link } from "react-router-dom";
import SettingsPrivacy from "./SettingsPrivacy";
import HelpSupport from "./HelpSupport";
import Display from "./Display";


export default function UuserMenu({user}) {
    const [visible, setVisible] = useState(0);
        return (
    <div className="mmenu">
    {visible ===0 && (<div> 
        <Link to="/profile" className="mmen_header hover3">
            <img src={user?.picture} alt="" />
            <div className="mmenu_col">
                <span> {user?.first_name} {" "}{user?.last_name}</span>
                <span>See Your Profile</span>
            </div>
        </Link> 
        <div className="mmenu_splitter"></div>
        <div className="mmenu_main hover1">
            <div className="small_circle">
                <i className="report_filled_icon"></i>
            </div>
            <div className="mmenu_col">
                <div className="mmenu_span1">Give Feedback</div>
                <div className="mmenu_span1">Help us improve verdant</div>
            </div>
        </div>

        <div className="mmenu_splitter"></div>
        <div className="mmenu_item hover1" onClick={()=>{setVisible(1)}} >
        <div className="small_circle">
            <i className="settings_filled_icon"></i>
        </div>
        <span>Settings & Privacy</span>
        <div className="rArrow">
            <i className="right_icon"></i>
        </div>
        </div>
        <div className="mmenu_item hover1" onClick={()=>{setVisible(2)}}>
        <div className="small_circle">
            <i className="help_filled_icon"></i>
        </div>
        <span>Help & Support</span>
        <div className="rArrow">
            <i className="right_icon"></i>
        </div>
        </div>
        <div className="mmenu_item hover1" onClick={()=>{setVisible(3)}}>
        <div className="small_circle">
            <i className="dark_filled_icon"></i>
        </div>
        <span>Display & Accessibility</span>
        <div className="rArrow">
            <i className="right_icon"></i>
        </div>
        </div>
        <div className="mmenu_item hover1">
        <div className="small_circle">
            <i className="logout_filled_icon"></i>
        </div>
        <span>Logout</span>
        </div>
        </div>
        )}
        {visible === 1 && 
        <SettingsPrivacy setVisible={setVisible} />
        }
        {visible === 2 && 
        <HelpSupport setVisible={setVisible} />
        }
        {visible === 3 && 
        <Display setVisible={setVisible} />
        }
    </div>
  )}
