import styled from "styled-components";
import backgroundImage from "../../../images/background.jpeg";

export const StyledMainDiv = styled.div`
  /* width: 320px; */
  font-family: 'Nunito Sans', 'sans-serif';
  background-position: center;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: 100% 100%;
  border-radius: 2px;
  padding: 30px 20px;

  strong {
    font-size: 20px;
    text-align: center;
    display: flex;
    color: ${({ theme }) => theme.primaryRed};
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
    font-size: 11px;
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
    width: 200px;
    color: black;
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
    font-family: 'Nunito Sans', 'sans-serif';
    display: block;
  }
`;
