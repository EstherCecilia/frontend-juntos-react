import styled from 'styled-components';
import backgroundImage from "../../../images/background.jpeg";

export const StyledMainDiv = styled.div`
  /* width: 320px; */
  height: 100%;
  width: 100%;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 2px;
  position: fixed;
  padding-top: 30px;
  z-index: -1;

  h1 {
      margin-top: 8vw;
      font-size: 3em;
      font-family: 'Nunito Sans';
      color: '#252A34';
      font-weight: bold;
  }

  p {
      font-family: 'Nunito Sans';
  }

  span {
    font-weight: bold;
  }
`

export const StyledOtherDiv = styled.div`
  margin-top: 4vh;

  .topText{
    font-size: 1.5vw;
    margin-top: 7vw;
    font-family: 'Nunito Sans';
  }

  .text{
      font-size: 1.5vw;
      font-family: 'Nunito Sans';
  }

  .topTextAbout {
    margin-top: 7vw;
    font-size: 1.5vw;
    font-family: 'Nunito Sans';
  }

  .textAbout {
      font-size: 1.5vw;
      font-family: 'Nunito Sans';
  }

  .email {
    font-size: 1.3vw;
    font-family: 'Nunito Sans';
  }
`