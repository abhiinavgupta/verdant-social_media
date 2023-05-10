import {menu, create} from "../../data/allMenu"
import AllMenuItem from "./AllMenuItem"

export default function AllMenu() {
  return (
    <div className="all_menu">
          <div className="all_menu_header">Menu</div>
            <div className="all_menu_wrap scrollbar">
            <div className="all_left">
            <div className="all_menu_search">
                        <i className="amm_s_ic"></i>
                        <input type="text" placeholder="Search Menu" />
            </div>
            <div className="all_menu_group">
            <div className="all_menu_group_header">
                Social
            </div>
            {
                            menu.slice(0, 6).map((item, i) => (
                                <AllMenuItem icon={item.icon} name={item.name} description={item.description} key={i} />
                            ))
                        }
            </div>
            <div className="all_menu_group">
            <div className="all_menu_group_header">
                Entertainment
            </div>
            {
                            menu.slice(6, 9).map((item, i) => (
                                <AllMenuItem icon={item.icon} name={item.name} description={item.description} key={i} />
                            ))
                        }
            </div>
            <div className="all_menu_group">
            <div className="all_menu_group_header">
                Shopping
            </div>
            {
                            menu.slice(9, 11).map((item, i) => (
                                <AllMenuItem icon={item.icon} name={item.name} description={item.description} key={i} />
                            ))
                        }
            </div>
            <div className="all_menu_group">
            <div className="all_menu_group_header">
                Personal
            </div>
            {
                            menu.slice(11, 15).map((item, i) => (
                                <AllMenuItem icon={item.icon} name={item.name} description={item.description} key={i} />
                            ))
                        }
            </div>
            <div className="all_menu_group">
            <div className="all_menu_group_header">
                Professional
            </div>
            {
                            menu.slice(15, 17).map((item, i) => (
                                <AllMenuItem icon={item.icon} name={item.name} description={item.description} key={i} />
                            ))
                        }
            </div>
            <div className="all_menu_group">
            <div className="all_menu_group_header">
                Community resources
            </div>
            {
                            menu.slice(17, 21).map((item, i) => (
                                <AllMenuItem icon={item.icon} name={item.name} description={item.description} key={i} />
                            ))
                        }
            </div>
            <div className="all_menu_group">
            <div className="all_menu_group_header">
                More From Verdant
            </div>
            {
                            menu.slice(21, 23).map((item, i) => (
                                <AllMenuItem icon={item.icon} name={item.name} description={item.description} key={i} />
                            ))
                        }
            </div>

          </div>
          <div className="all_right">
                    <div className="all_right_header">Create</div>
                    {create.map((item, i) => (
                        <div className="all_right_item hover3" key={i}>
                            <div className="all_right_circle">
                                <i className={item.icon}></i>
                            </div>
                            {item.name}
                        </div>
                    ))}
                </div>
        </div>
    </div>
  )
}
