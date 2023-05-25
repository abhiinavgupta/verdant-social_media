import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";


export default function Display({setVisible}) {
    const dispatch = useDispatch();
    const { darkTheme } = useSelector((state) => ({ ...state }));

  return (
    <div className="absolute_wrap">
        <div className="absolute_wrap_header">
        <div className="circle hover1" onClick={() => setVisible(0)}>
        <i className="arrow_back_icon"></i>
        </div>
        Display & Accessibility
        </div>
        <div className="mmenu_main">
            <div className="small_circle">
                <div className="dark_filled_icon"></div>
            </div>
            <div className="mmenu_col">
            <span className="mmenu_span1">Dark Mode</span>
            <span className="mmenu_span2">Adjust the appearance of verdant to reduce</span> <span className="mmenu_span2"> glare and give your eyes a break</span>
        </div>
        </div>
        <label htmlFor="darkOff" className="hover1" onClick={() => {
                    Cookies.set("darkTheme", false, {expires: 365});
                    dispatch({ type: "LIGHT" });
                }} >
        <span>Off</span>
        {darkTheme
                    ? <input type="radio" name="dark" id="darkOff" className="themeInput"/>
                    : <input type="radio" name="dark" id="darkOff" className="themeInput" defaultChecked />}
        </label>
        <label htmlFor="darkOn" className="hover1" onClick={() => {
                    Cookies.set("darkTheme", true, {expires: 365});
                    dispatch({ type: "DARK" });
                }}
            > 
        <span>On</span>
        {darkTheme
                    ? <input type="radio" name="dark" id="darkOn" className="themeInput" defaultChecked />
                    : <input type="radio" name="dark" id="darkOn" className="themeInput"/>
                }
        </label>
        <div className="mmenu_main">
            <div className="small_circle">
                <i className="compact_icon"></i>
            </div>
            <div className="mmenu_col">
            <span className="mmenu_span">Compact Mode</span>
            <span className="mmenu_span2">Make your font size smaller so more </span> <span className="mmenu_span2">content can fit on the screen</span>
        </div>
        </div>
        <label htmlFor="compactOff" className="hover1">
        <span>Off</span>
        <input type="radio" name="dark" id="compactOff" />
        </label>
        <label htmlFor="compactOn" className="hover1">
        <span>On</span>
        <input type="radio" name="dark" id="compactOn" />
        </label>
        <div className="mmenu_item hover1">
            <div className="small_circle">
                <i className="keyboard_icon"></i>
            </div>
            <span> Keyboard</span>
            <div className="rArrow">
                <i className="right_icon"></i>
            </div>
        </div>
    </div>
  )
}
