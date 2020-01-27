import styled from "styled-components";

export const Buttonm = styled.div`
    display: flex;
    justify-content: space-between;
    width: ${props => (props.full ? "100%" : "auto")};
`;

export const Button = styled.div`
    border-radius: 20px;
    padding: 1px 1px;
    background: #ff6e0d;
    color: white;
    margin: 10px 0px;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-size: 13px;
    line-height: 1.75;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    width: 190px;

    &:hover {
        background-color: #ffa86e;
    }
`;

export const FabSty = styled.div`
    display: flex;
    color: #ff6e0d;
    background: white;
    border-radius: 25px;
    padding: 9px;
    text-transform: uppercase;
    width: 16px;

    &:hover {
        color: white;
        background: #ff6e0d;
        padding: 9px;
        border-radius: 25px;

        -webkit-transform: scale(2.3);
        -ms-transform: scale(0.9);
        transform: scale(0.9);
    }
`;

export const FabTeste = styled.div`
    box-shadow: 0px 0px 0px #ffc;
    padding: 0px;
    margin: 0px;
    margin-left: 4px;
    color: #ff6e0d;
    background-color: #ffffff;

    &:hover {
        border: 4px solid #ffffff;
        color: #ffffff;
        box-shadow: 0px 0px 0px #ffc;
    }
`;
