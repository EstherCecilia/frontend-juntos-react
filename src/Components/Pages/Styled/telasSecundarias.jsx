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

  form {
    margin-left: auto;
    margin-right: auto;
  }

  strong {
      font-size: 2em;
  }

  h1 {
      margin-top: 10vw;
  }
`

export const StyledOtherDiv = styled.div`
  margin-top: 30px;

  .text{
      margin-top: 6vw;
  }

  .textAbout {
      margin-top: 7vw;
  }
`