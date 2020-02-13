import styled from "styled-components";
import backgroundImage from "../../../images/background.jpeg";

export const StyledMainDiv = styled.div`
  /* width: 320px; */
  font-family: 'Nunito Sans';
  height: 100%;
  width: 100%;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 2px;
  padding-top: 30px;
  padding-bottom: 30vw;
  z-index: -1;

  strong {
    font-size: 20px;
    text-align: center;
    display: flex;
    color: ${({ theme }) => theme.primaryRed};
  }

  h1 {
    font-size: 3em;
    font-family: 'Nunito Sans';
    align-content: center;
    text-align: center;
  }

  form {
    margin-left: auto;
    margin-right: auto;
  }

  button[type="submit"] {
    width: 100%;
    border: 0;
    margin-top: 30px;
    background: ${({ theme }) => theme.primaryRed};
    border-radius: 2px;
    padding: 15px 20px;
    font-size: 12px;
    font-weight: bold;
    color: ${({ theme }) => theme.primaryDark};
    cursor: pointer;
    transition: background 0.5s;
  }
`;

export const StyledOtherDiv = styled.div`
  margin-top: 5px;

  input {
    width: 100%;
    height: 32px;
    color: black;
    font-size: 14px;
    border: 0;
    border-bottom: 1px solid ${({ theme }) => theme.primaryDark};
  }

  input[type="date"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  label {
    color: #000;
    font-size: 14px;
    font-weight: bold;
    font-family: 'Nunito Sans';
    display: block;
  }
`;
