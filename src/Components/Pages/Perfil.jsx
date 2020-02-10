import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import { theme } from "../../GlobalStyle/theme";
import BurgerMenu from "./BurgerMenu";
import Avatar from "@material-ui/core/Avatar";
import perfil from "../../images/perfil.jpg";
import { StyledMainDiv, StyledOtherDiv } from "./Styled";
import MenuPoint from "./atoms/MenuPoint";
import moment from "moment";

const Perfil = props => {
  const { usuario } = props;
  const classes = useStyles();
  const dt = moment(usuario.birthdate, "YYYY-MM-DD").format("DD-MM-YYYY");

  return (
    <>
      <ThemeProvider theme={theme}>
        <BurgerMenu />

        <StyledMainDiv>
          <MenuPoint user={usuario} style={{ marginLeft: "90%" }} />
          <div className={classes.form}>
            <StyledOtherDiv>
              <h1>Meu perfil</h1>

              <Avatar
                style={{ margin: "auto", width: "100px", height: "100px" }}
                alt="Remy Sharp"
                src={perfil}
              />
            </StyledOtherDiv>
            <StyledOtherDiv>
              <h2>{usuario.name}</h2>
              <p>
                {/* <span>{usuario.course.name}</span> -{" "}
                <span>{usuario.course.campus}</span> */}
              </p>
              <p>{dt}</p>
            </StyledOtherDiv>
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
