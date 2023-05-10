import { useRef, useState } from "react";
import Header from "../../components/header";
import useClickOutside from "../../helpers/clickOutside";

const Main = () => {
    const [visible, setVisible] = useState(true);
        const el = useRef(null);
        useClickOutside (el, () => {
            setVisible(false); 
            console.log("u clicked");
        });

    return (
    <div>
        <Header />
        { visible && <div className="card" ref={el}></div>}

    </div>
    )
}

export default Main;