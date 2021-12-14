import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';

const Colors = {
    white: "#FFF",
    lightPurple: "#5204DA",
    darkPurple: "#240D4B"
}

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const Form = styled.form`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Input = styled.input`
    width: 70%;
    padding: 10px;
    background: transparent;
    border-bottom: 1px solid ${Colors.lightPurple};
    margin-bottom: ${(props) => (props.errorMessage) === true ? "0":"10px"};
    font-size: 24px;
    

    &[type="checkbox"]{
        margin-right: 15px;
        display: inline;
        width: 6%;
    }
    &[type="password"]{
        font-size: 24px !important;
    }

    ::placeholder {
        font-size: 24px;
    }
`;

export const Label = styled.label`
    color: ${Colors.lightPurple};
    text-align: left;
    margin-top: 50px;
    margin-bottom: 30px;

    &.formLabel {
        font-weight: 700;
        font-size: 26px;
    }

    &.ErrorMessage {
        margin-top: 10px;
        margin-bottom: 20px;
        font-style: italic;
        font-weight: 700;
        color: #FF0000;
        
    }
`;

export const Button = styled.button`
    width: 220px;
    padding: 10px;
    color: ${Colors.white};
    font-size: 1.2rem;
    border-radius: 10px;
    background: linear-gradient(to right, ${Colors.lightPurple}, ${Colors.darkPurple});
    cursor: pointer;
`;

export const Link = styled(LinkR)`
    margin-top: 20px;
    text-decoration: none;
    color: ${Colors.darkPurple};
    font-size: 20px;

    &::active {
        color: ${Colors.lightPurple}
    }
`;