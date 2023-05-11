import { Dots, NewRoom, Search } from "../../../svg"
import Contact from "./Contact";
import "./style.css"

export default function RightHome({ user }) {
    const color="#65676b";
  return (

    <div className="right_home"> 
    <div className="header"> SPONSORED</div>
    <div className="splitter"></div>
        <div className="contacts_wrap">
            <div className="contacts_header">
            <div className="contacts_header_left">Contacts</div>
            <div className="contacts_header_right">
            <div className="contact_circle hover4">
                <NewRoom color={color} />
            </div>
            <div className="contact_circle hover4">
            <Search color={color} />
            </div>
            <div className="contact_circle hover4">
            <Dots color={color} />
            </div>
            </div>
            </div>
        <div className="contacts_list">
            <Contact user={user} />
        </div>
    </div>
    </div>
  )
}
