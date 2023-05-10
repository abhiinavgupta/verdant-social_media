import "./style.css";
import { Link } from "react-router-dom";
import { Logo, Search, HomeActive, Friends, Watch, Market, ArrowDown, Home, FriendsActive, Menu, Messenger, Notifications, ArrowDown1 } from "../../svg";
import { useSelector } from "react-redux";
import SearchMenu from "./SearchMenu";
import { useRef, useState } from "react";
import AllMenu from "./AllMenu";
import useClickOutside from "../../helpers/clickOutside";

import UuserMenu from "./userMenu/UuserMenu";

export default function Header() {
    const { user } = useSelector((user) => ({ ...user }));
    console.log(user)
    const color = "#f8b400";
    const[showSearchMenu, setShowSearchMenu] = useState(false);
    const[showAllMenu, setShowAllMenu] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);

    const allMenu = useRef(null);
    const usermenu = useRef(null);

    useClickOutside(allMenu, () => {
        setShowAllMenu(false);
    })

    useClickOutside(usermenu, () => {
        setShowUserMenu(false);
    })

  return(
  <header>
    <div className="header_left">
    {/* <div style={{display: "none"}}> */}
        <Link to="/" className="header_logo">
            <div className="circle">
                <Logo />
            </div>
        </Link>
        <div className="search search1" 
        onClick={() => { setShowSearchMenu(true) }}
        >
                    <Search 
                    color={color} 
                    
                    />
                    <input
                        type="text"
                        placeholder="Search Verdant heros.."
                        className="hide_input"
                    />
                </div>
    </div>
    {/* </div> */}
    { showSearchMenu && <SearchMenu color={color} setShowSearchMenu={setShowSearchMenu} /> }
    
    <div className="header_middle">
        <Link to="/" className="middle_icon hover1 active">
            <HomeActive />
        </Link>
        <Link to="/" className="middle_icon hover1">
            <Friends color={color} />
        </Link> 
        <Link to="/" className="middle_icon hover1">
        <div className="middle_notification">9+</div>
            <Watch color={color} />
        </Link>
        <Link to="/" className="middle_icon hover1">
            <Market color={color} />
        </Link>

    </div>



    <div className="header_right">
        <Link to="/profile" className="profile_link hover1">
            <img src={user?.picture} alt="" />
            <span>{user?.first_name}</span>
        </Link>
        <div className={`circle_icon hover1 ${showAllMenu && "active_header"}`}
        ref={allMenu}
         >
        <div onClick={()=>{
            setShowAllMenu((prev) => !prev);
        }} >
            <Menu />
        </div>
            
            {showAllMenu && <AllMenu />}
            
        </div>
        <div className="circle_icon hover1">
            <Messenger />
        </div>
        <div className="circle_icon hover1">
            <Notifications />
            <div className="right_notification">5</div>
        </div>
        <div className={`circle_icon hover1 ${showUserMenu && "active_header"}`} ref={usermenu} >
        <div onClick={()=> {setShowUserMenu((prev) => !prev)}} > <ArrowDown1  /> </div>
            
            { showUserMenu && <UuserMenu user={user} />}
            
        </div>

    </div>
  </header>
);
}
