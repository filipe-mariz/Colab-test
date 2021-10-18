import styled from "styled-components";

export const Div = styled.div`
    position: absolute;
    width: 10%;
    height: 110%;
    padding: 32px 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: -4%;
    background: linear-gradient(45deg, #E9C5FF, #F7E9FF);
    background-size: 300%, 300%;
    position: fixed;

    .ColabImage {
        max-width:70px;
        max-height:150px;
        width: auto;
        height: auto;
        margin-left: 10%;
        margin-top: 560%;
    }
`
