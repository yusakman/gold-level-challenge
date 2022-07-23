import "./style.css"
import logo from "../../asset/logo.png"

const Navbar = (props) => {
    const {image, navList} = props
    return (
        <div className="navbar-row">
            {/* <img src={image} alt="Logo"></img>*/}
            <img src={logo} alt="My Logo"></img>
            <div className="nav-list">
                {navList.map((item) => (
                    <p>{item}</p>
                ))}
            </div>
            {/* <h1 onClick={handleSidebar}>{showSidebar ? 'x' : '='}</h1> */}
        </div>
    )
}

export default Navbar;