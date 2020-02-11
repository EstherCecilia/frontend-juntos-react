import styled from 'styled-components';
import backgroundImage from "../../../images/background.jpeg";

export const StyledMainDiv = styled.div`
  /* width: 320px; */
  height: 100%;
  width: 100%;
  position: absolute;
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
  margin-top: 30px;

  .text{
      margin-top: 7vw;
  }

  .textAbout {
      margin-top: 7vw;
  }
`