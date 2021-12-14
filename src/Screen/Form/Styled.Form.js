import styled from "styled-components";

const Colors = {
    white: "#FFF",
    lightPurple: "#5204DA",
    darkPurple: "#240D4B"
}

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: "left right";
    place-items: center;
    margin: 0 auto;   
`;

export const SmallContainer = styled.div`
    width: 400px;
    height: max-content;
    position: relative;

    &.sideOne {
        width: 100%;
        height: 100vh;
        background: #121212;
        grid-area: left;
        display: grid;
        place-items: center;

        img {
            filter: drop-shadow(0mm 0mm 1mm #fff)
        }
    }
    &.sideTwo {
        grid-area: right;
        background: #EDEDED;
        width: 100%;
        height: 100vh;
        display: grid;
        place-items: center;

        /* img {
            position: absolute;
            top: 20px;
            left: 20px;
            width: 50px;
            animation: rotate  10s infinite linear;

            @keyframes rotate {
                from {
                    transform: rotate(0deg)
                }
                to {
                    transform: rotate(360deg)
                }
            }
        }
    } */

    label {
        font-size: 1.3rem;
    }

    span {
        color: ${Colors.lightPurple};
        font-weight: 700;
        font-style: italic;
        cursor: pointer;
        font-size: 1.4rem;
        }

    @media Screen and (max-width: 400px){
        width: 100%;
        height: 100vh;
    }
`;

export const Button = styled.button`
    width: 110px;
    padding: 10px;
    border-radius: 10px;
    z-index: 1;
    background: transparent;
    transition: .7s;
    cursor: pointer;

    @media Screen and (max-width: 400px){
        flex: 1
    }
`;