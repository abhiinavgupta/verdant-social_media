

import { Link } from "react-router-dom";

export default function Footer(setVisible) {
  return (
    <footer className="login_footer">
    <div className="login_footer_wrap">
        <Link to="/" > English (UK) </Link>
        <Link to="/" > हिन्दी  </Link>
        <Link to="/" > ردو </Link>
        <Link to="/" > ਪੰਜਾਬੀ </Link>
        <Link to="/" > বাংলা </Link>
        <Link to="/" > ગુજરાતી </Link>
        <Link to="/" > मराठी </Link>
        <Link to="/" > தமிழ் </Link>
        <Link to="/" > తెలుగు </Link>
        <Link to="/" > മലയാളം </Link>
        <Link to="/" > ಕನ್ನಡ </Link>
        <Link to="/" className="footer_square" >
            <i className="plus_icon"></i>
        </Link>

    </div>
    <div className="footer_splitter"></div>
    <div className="login_footer_wrap">
    <Link to="/" onClick={() => setVisible(true)} >Sign Up</Link>

<Link to="/">Log in</Link>
<Link to="/">Watch </Link>
<Link to="/">Places</Link>
<Link to="/">Marketplace</Link>
<Link to="/">  Oculus </Link>

<Link to="/">  Portal</Link>

<Link to="/">  Instagram</Link>

<Link to="/">  Bulletin</Link>

<Link to="/">  Local</Link>

<Link to="/">  Fundraisers </Link>

<Link to="/">  Services</Link> 
<Link to="/">  Voting Information Centre</Link>

<Link to="/">  Groups </Link>

<Link to="/">  About</Link>

<Link to="/">  Create ad</Link>

<Link to="/">  Create Page</Link>

<Link to="/">  Developers </Link>
<Link to="/">
AdChoices
<i className="adChoices_icon"></i>
</Link>
<Link to="/">  Careers</Link>

<Link to="../../pages/data/Privacy">  Privacy</Link> <Link to="/">  Cookies</Link>

    </div>
<div className="login_footer_wrap" style={{fontSize:"12px", marginTop:"10px"}}> Abhinav Gupta Ⓒ 2023</div>
</footer>
  )
};
