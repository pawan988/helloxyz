import React from "react";
import "./Navbar.css";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from "react-router-dom";

const Navbar = () => {
return (
         <header className="navbAr">
                <div className="logo-wraper">
                    <img src="logo512.png" className="image" alt="React logo" />
                    <h3 className="para1">ReactNative</h3>
                    <p className="version">0.63 <ArrowDropDownIcon /></p>

                </div>
                <div className="navbar_link">
                    <Link className="link" to="/" >Home</Link>
                    <Link className="link" to="/About" >About</Link>
                    <Link className="link" to="/Contact" >Contact</Link>
                    <Link className="link" to="/Service" >Service</Link>
                    <div className="github-icon">
                    <GitHubIcon/>
                    </div>
                    <button type="button" aria-label="search">
                    <div className="serachicon">
                    <SearchIcon/>
                    search
                     </div>
                    
                    </button>
                </div>
            </header>

        
    )
}
export default Navbar;