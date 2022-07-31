import React from "react";
import './style.css'
import { GrClose } from "react-icons/gr";

const Sidebar = (props) => {
    const {navList, sidebar, toggle} = props

    const displaySidebar = (click) => {
        if(!click) {
            return(
                <div className="sidebar" onMouseLeave={(e) => toggle(e.preventDefault())}>
                    <span onClick={(e) => toggle(e.preventDefault())}><GrClose /></span>
                    <div className="nav-mobile">
                        {navList.map((item) => (
                           <a href={item.url}>{item.text}</a>
                        ))}
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            {displaySidebar(sidebar)}
        </div>
     );
}
 
export default Sidebar;