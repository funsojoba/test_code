import Img from "../img/img";

import { Link } from "react-router-dom";
import Button from "../button";
import { FaHome } from "react-icons/fa";
import { BiPowerOff } from "react-icons/bi";


import {
    SideBarDiv, 
    SideLogo, 
    SideLogoSm, 
    SideLinkContainer, 
    SideIcon, SideLink, LogoutDiv,
    LogoutDivSmall} from './style'

const SideBar = () => {

    const pathName = window.location.pathname
    const logOut = () => {
        localStorage.clear()
        window.location = "/";
    }
    return <SideBarDiv>
        <Link to="/">
            <SideLogoSm>
                <Img alt="Employ" src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1653175874/logo_yzw6uf.svg" />
            </SideLogoSm>
        </Link>
        <Link to="/">
            <SideLogo>
                <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1653178126/Group_3_wmkvd5.svg" alt="emploo" />
            </SideLogo>
        </Link>
       
        <SideLinkContainer>
            <Link to="/dashboard" className={pathName === "/dashboard" && 'active'} >
                <SideIcon>
                    <FaHome />
                </SideIcon>
                <SideLink>
                    <p >Dashboard</p>
                </SideLink>
            </Link>
           
        </SideLinkContainer>
        <LogoutDivSmall>
            <Button
                onClick={logOut}
                background="rgb(255, 255, 255)"
                color="#B90059"
                padding="15px"
            > <BiPowerOff/> </Button>
        </LogoutDivSmall>
        
        <LogoutDiv>
            <Button
                onClick={logOut}
                background="#fff"
                width="100%"
                color="#B90059"
            ><BiPowerOff/> &nbsp; Log Out</Button>
        </LogoutDiv>
    </SideBarDiv>
}

export default SideBar