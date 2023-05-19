import { Link } from "react-router-dom";
import { Dots } from "../../svg";
import Dotss from "../../svg/dots2";

export default function ProfileMenu() {
    return (
        
        <div className="profile_menu_wrap">
            <div className="profile_menu">
                <Link to="/" className="profile_menu_active">Posts</Link>
                <Link to="/" className="hover6">About</Link>
                <Link to="/" className="hover6">Friends</Link>
                <Link to="/" className="hover6">Photos</Link>
                <Link to="/" className="hover6">Videos</Link>
                <Link to="/" className="hover6">More</Link>
                <div className="p10_dots hover6">
                    <Dotss />
                </div>
            </div>
        </div>
    )
}