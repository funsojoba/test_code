import styled, {css} from "styled-components";

export const SideBarDiv = styled.div`
    width:250px;
    background: #004D78;
    border-radius: 30px;
    height: 90vh;
    padding:40px;
    color:#fff;
    box-sizing: border-box;
    position:relative;
    @media only screen and (max-width:750px){
        width:70px;
        padding:5px;
        border-radius:15px;
        height:97vh;
    }
`

export const SideLogo = styled.div`
    width:100%;
    margin-bottom: 60px;
    @media only screen and (max-width:750px){
        display:none;
    }
    `

export const SideLogoSm = styled.div`
    display: none;
    width:30px;
    margin:30px auto 60px;
    @media only screen and (max-width:750px){
        display:block;
    }

`

export const SideLinkContainer = styled.div`
    @media only screen and (max-width:750px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    a{
        display: flex;
        color:#fff;
        align-items: center;
        text-decoration:none;
        position:relative;
        transition: all 200ms ease-in;
        margin-bottom: 20px;

        &:hover{
            transform: translateX(10px);
        }

        }
    
        ${({ active }) => active && css`
    `};
    }
`


export const SideIcon = styled.div`
    padding:5px;
    
    @media only screen and (max-width:750px){
        .fas{
            font-size: 1.5em;
        }
    }
`
export const SideLink = styled.div`
    padding: 5px;

    @media only screen and (max-width:750px){
        display:none;
    }

`
export const LogoutDiv = styled.div`
    position: absolute;
    bottom: 20px;
    width:60%;
    margin:auto;
    left:50%;
    transform: translateX(-50%);
    
    @media only screen and (max-width:750px){
        display:none
    }
    `
export const LogoutDivSmall = styled.div`
    position: absolute;
    bottom: 20px;
    left:50%;
    transform: translateX(-50%);
    display:none;
    
    @media only screen and (max-width:750px){
        display:flex;
        align-items: center;
        justify-content:center;
    }
`