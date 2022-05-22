import styled from "styled-components";

export const Container = styled.div`
    padding:30px;
    display:flex;

    @media only screen and (max-width:850px){
        padding:10px
    }
`

export const Content = styled.div`
    width: 80%;
    height: 100vh;
    overflow: scroll;
    scrollbar-width: none;
`

export const DashDiv = styled.div`
    display: flex;
    flex:1;
    width:${props => props.width ? props.width : "auto"};
    padding:30px;
    justify-content: space-around;
    flex-wrap: wrap;

    @media only screen and (max-width:850px){
        padding:20px;
        flex-direction:column;
    }
`

export const DashBoxDiv = styled.div`
    display: flex;
    align-items: center;
    width:100%;
    justify-content: space-between;
    margin-bottom: 10px;
`


export const TopDiv = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    `

export const CardWrapper = styled.div`
    padding:30px;
    display:flex;
    flex-wrap:wrap;
`

export const CardBox = styled.div`
    width:200px;
    height:300px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    border-radius: 20px;
    background: url(${props => props.background ? props.background : 'none'});
    background-size: cover;
    background-position: center center;
    position:relative;
    margin:10px;
    transition: all 200ms ease-in;
    overflow:hidden;

    &:hover{
        transform:translateY(-5px);
        box-shadow: 0px 5px 10px rgba(0,0,0,0.3);
    }
`

export const CardName = styled.div`
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    height:50px;
    // background:rgba(0,0,0,0.5);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    padding:10px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
`

export const CloseBtn = styled.div`
    position:absolute;
    top:5px;
    right:5px;
    width:35px;
    height:35px;
    border-radius:50%;
    background: #fff;
    color: #B90059;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
`
export const EditBtn = styled.div`
    position:absolute;
    top:5px;
    left:5px;
    width:35px;
    height:35px;
    border-radius:50%;
    background: #fff;
    color: #004D78;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
`