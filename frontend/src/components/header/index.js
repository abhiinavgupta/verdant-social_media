import "./style.css";
import { Link } from "react-router-dom";
import { Logo, Search, HomeActive, Friends, Watch, Market, ArrowDown, Home, FriendsActive, Menu, Messenger, Notifications, ArrowDown1 } from "../../svg";
import { useSelector } from "react-redux";
import SearchMenu from "./SearchMenu";
import { useRef, useState } from "react";
import AllMenu from "./AllMenu";
import useClickOutside from "../../helpers/clickOutside";

import UuserMenu from "./userMenu/UuserMenu";

export default function Header({ page, getAllPosts }) {
    const { user } = useSelector((user) => ({ ...user }));

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
                {/* <Logo /> */}
                <img src="/verdant-logo-modified.png" alt="Logo" className="headerr_logo"></img>
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
    { showSearchMenu && (<SearchMenu 
    color={color}
     setShowSearchMenu={setShowSearchMenu} token={user.token} />) }
    
    <div className="header_middle">
        <Link to="/" className={`middle_icon hover1 ${ page ==="home" ? "active" : "hover1"}`} onClick={()=> getAllPosts()}>
        { page ==="home" ? <HomeActive /> :  <Home color={"#f8b400"} /> }


           
           
        </Link>
        <Link to="/friends" className={`middle_icon hover1 ${ page ==="friends" ? "active" : "hover1"}`}>
            {/* <Friends color={color} /> */}
            {page === "friends" ? <FriendsActive /> : <Friends color={"#f8b400"} />}
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
        <Link to="/profile" className={`profile_link hover1 ${page === "profile" ? 'activate_link' : '' }`}>
            <img src={user?.picture} alt="" />
            <span>{user?.first_name}</span>
        </Link>
        <div className={`circle_icon hover1 ${showAllMenu && "active_header"}`}
        ref={allMenu}
         >
        <div onClick={()=>{
            setShowAllMenu((prev) => !prev);
        }} >
        <div style={{transform:"translateY(2px)"}}>
        <Menu />
        </div>
        
            
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
        <div onClick={()=> {setShowUserMenu((prev) => !prev)}} > 
        <div style={{transform:"translateY(2px)"}}>
        <ArrowDown1  /> 
        </div>
        
        </div>
            
            { showUserMenu && <UuserMenu user={user} />}
            
        </div>

    </div>
  </header>
);
}
