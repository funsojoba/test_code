import styled, {css} from "styled-components";

export const ButtonDiv = styled.button`
    border-radius: 10px;
    background: ${props => props.background ? props.background : "#004D78"};
    color: ${props => props.color ? props.color : "#fff"};
    border: ${props => props.border ? props.border : "none"};
    cursor: pointer;
    padding: ${props => props.padding ? props.padding : "15px 20px"};
    transition:all ease-in 300ms;
    width: ${props => props.width ? props.width : "auto"};

    &:hover{
        transform: translateX(5px);
    }
    &:disabled,
    &[disabled]{
    background-color: #EAEAEA;
    color: #666666;
    cursor: not-allowed;
    }


    ${({ sm }) => sm && css`
        @media only screen and (max-width:850px){
            padding:10px 15px
        }
    `};
`