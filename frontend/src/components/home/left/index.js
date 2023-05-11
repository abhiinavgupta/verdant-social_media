import { Link } from "react-router-dom";
import "./styles.css";
import LeftLink from "./LeftLink";
import { left } from "../../../data/home"
import { ArrowDown1 } from "../../../svg";
import { useState } from "react";
import Shortcut from "./Shortcut";

export default function LeftHome({user}) {
    const [visible, setVisible] = useState(false);
  return (
    <div className="left_home scrollbar1">
            <Link to="/profile" className="left_linkk hover4"><img src={user?.picture} alt="" />
            <span>{user?.first_name} {user?.last_name}</span>
            </Link>
            {
                left.slice(0, 8).map((link, i) => (
                    <LeftLink key={i} img={link.img} text={link.text} notification={link.notification} />
                ))
            }
            {/* <LeftLink /> */}
            {!visible && (
                <div className="left_link hover4" onClick={()=> {setVisible(true)}}>
                <div className="small_circle">
                    <ArrowDown1 />
                </div>
                <span> See more</span>
            </div>
            )}
            {visible &&(
                <div className="more_left" >
            {
                left.slice(8, left.length).map((link, i) => (
                    <LeftLink key={i} img={link.img} text={link.text} notification={link.notification} />
                ))}
            <div className="left_link hover4" onClick={()=> {setVisible(false)}}>
                <div className="small_circle rotate360">
                    <ArrowDown1 />
                </div>
                <span> Show less</span>
            </div>
            </div>
            )}
            <div className="splitter"></div>
                <div className="shortcut">
                    <div className="heading">Your shortcuts</div>
                    <div className="edit_shortcut">Edit</div>
                
            </div>
            <div className="shortcut_list hover4">
                <Shortcut link="https://www.instagram.com/abhiiinavgupta/"
                img="instalogo.svg"
                name="My instagram" />
            </div>
            <div className={`cs_copyright ${visible && "relative_cs_copyright"}`}>
                <Link to="/">Privacy </Link><span>. </span>
                <Link to="/">Terms </Link><span>. </span>
                <Link to="/">Advertising </Link><span>. </span>
                <Link to="/">Ad Choices <i className="ad_choices_icon>"></i></Link><span>. </span>
                <Link to="/"></Link>Cookies <span>. </span>
                <Link to="/">More </Link><span>. </span><br />
                Verdant Ⓒ 2023.

            </div>
            </div>
  );
}
