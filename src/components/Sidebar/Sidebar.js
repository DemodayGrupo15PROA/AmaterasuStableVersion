import React, { useEffect, useState } from 'react';
import logo from "../../Assets/images/logo_amaterasu2.png";
import logout from "../../Assets/images/logout_white.png";

import '../../Assets/css/App.css'
import '../../Assets/css/props.css'
import '../../Assets/css/uifonts.css'

import { NavLink } from "react-router-dom";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../Config/firebase-config';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate();

    const [userName,setUserName] = useState("");
    const userArray = [];

    const Logout = () => {
        navigate("")
        signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) =>{
            if(user){
                userArray.push(user.email.split('@'))
               setUserName(userArray[0][0])
            } else {
                setUserName("No user")
            }
        })
    },[]);

    const [nav, setNav] = useState([
        {label: "Início", slug: "/", icon: "icon-home3"},
        {label: "Explore", slug: "discover", icon:"icon-compass2"},
        {label: "Meus cursos", slug: "mycourses", icon: "icon-books"}
    ])

    const [currentPage, setCurrentPage] = useState("/");

    var navigation = [];
    for(let i = 0; i < nav.length; i++){
        navigation.push(
            <li key={"nav-" + i + nav[i].slug}>
                <NavLink to={nav[i].slug} className={"aic link noul flex cfff"} >
                <div className={"ico s18 " + nav[i].icon} />
                <h2 className="lbl s13 ">{nav[i].label}</h2>
                </NavLink>
            </li>
        );
    }

    return (
       <div className="sidebar">
           <div className="logo_content">
           <a href="#" className="logo bl">
                <img src={logo} className="bl"/>
            </a>
            <div className="logo_name cfff zen">AMATERASU</div>
        </div>
            <div className="nav_items">
            <ul className="nav">
                {navigation}
            </ul>  
            </div>
            <div className="profile_content">
                <div className="profile">
                    <div className="profile_details">
                    <img src="https://placeimg.com/100/100/people"/>
                    <div className="lbl s15 fontb cfff">
                                <span>{userName}</span>
                                <h2 className="uname s13 cfff">@{userName}</h2>
                            </div>
                            <div className="logout">
                            <img src={logout} onClick={() => (Logout())} alt="some"/>
                            </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}



export default Sidebar;