import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../GlobalStyle/theme";
import BurgerMenu from "./BurgerMenu";
import Avatar from "@material-ui/core/Avatar";
import perfil from "../../images/perfil.jpg";
import perfilF from "../../images/perfilF.jpg";
import MenuPoint from "./atoms/MenuPoint";
import Chip from "@material-ui/core/Chip";
import axios from "axios";
import {
  StyledMainDiv,
  StyledOtherDiv
} from "../Pages/Styled/ajusteBackground";
import { createBrowserHistory } from "history";

const history = createBrowserHistory({
  basename: "/"
});

const Perfil = props => {
  var image = perfil;
  const { usuario } = props;
  const classes = useStyles();
  const [helpers, setHelpers] = useState([]);

  if (usuario.name === undefined) {
    history.push("/login");
  }
  useEffect(() => {
    if (usuario.isHelper) {
      const AuthToken = localStorage.getItem("token");
      const USER_TOKEN = "Bearer ".concat(AuthToken);
      // axios
      //   .get(
      //     `https://api-edu.herokuapp.com/helpers/${localStorage.getItem("id")}`,
      //     { headers: { Authorization: USER_TOKEN } }
      //   )
      //   .then(res => {
      //     setHelpers(res.subjects);
      //   });
      axios
        .get(`https://api-edu.herokuapp.com/helpers`, {
          headers: { Authorization: USER_TOKEN }
        })
        .then(res => {
          console.log(res);
          let variavel = res.data.map(subject => {
            if (localStorage.getItem("id") === subject.student._id) {
              console.log(subject.subjects);
              let variavel = subject.subjects.map(sub => sub.name);
              // let x = subject.subjects.map(var => {var.name)};
              console.log(variavel);
              setHelpers(variavel);
            }
          });
        });
    }
  }, []);

  if (usuario.gender === "F") {
    image = perfilF;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <BurgerMenu />

        <StyledMainDiv>
          <MenuPoint user={usuario} style={{ marginLeft: "90%" }} />
          <div className={classes.form}>
            <StyledOtherDiv>
              <h1>MEU PERFIL</h1>

              <Avatar
                style={{
                  margin: "auto",
                  width: "12vw",
                  height: "12vw",
                  marginTop: "8vh",
                  alignContent: "center"
                }}
                alt="Remy Sharp"
                src={image}
              />
            </StyledOtherDiv>
            <StyledOtherDiv>
              <h2>{usuario.name}</h2>
              <p>
                <span>{usuario.course.name}</span> -{" "}
                <span>{usuario.course.campus}</span>
              </p>
              <p>{usuario.phone}</p>
            </StyledOtherDiv>
            {usuario.isHelper ? (
              <StyledOtherDiv>
                {helpers.map(helper => (
                  <Chip
                    label={helper}
                    style={{
                      margin: "theme.spacing(0.5)"
                    }}
                  />
                ))}
              </StyledOtherDiv>
            ) : null}
          </div>
        </StyledMainDiv>
      </ThemeProvider>
    </>
  );
};

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto"
  },

  input: {
    width: "100%",
    height: "32px",
    fontSize: "14px",
    display: "center",
    color: "black",
    border: 0,
    borderBottom: ("1px", "solid", "#0D0C1D")
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    display: "center",
    backgroundColor: "#f50057",
    color: "#fafafa"
  },
  divSubmit: { display: "-webkit-inline-box", margin: "auto" }
}));

export default Perfil;
