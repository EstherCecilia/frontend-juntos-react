import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(theme => ({
    ButtonBuscar: {
        borderRadius: "20px",
        padding: "10px 20px",
        background: "#ff6e0d",
        color: "white",
        margin: "0px 0px",
        textTransform: "uppercase",

        letterSpacing: ".16em",
        fontSize: "12px",
        fontWeight: "400",
        lineHeight: "normal",
        height: "auto",
        "&:hover": {
            textDecoration: "none",
            backgroundColor: "#ffa86e"
        }
    },
    text: {
        margin: "0px",
        padding: "15px 1px"
    }
}));

export default function BtnPadrao({
    texto,
    title,
    className,
    onClick,
    children,
    ...props
}) {
    const classes = useStyles();

    return (
        <div>
            <Tooltip title={title} disableHoverListener={title ? false : true}>
                <Button
                    size="large"
                    color="primary"
                    className={`${classes.ButtonBuscar} ${className}`}
                    onClick={onClick}
                    aria-label="Add"
                    {...props}
                >
                    {children ? children : texto}
                </Button>
            </Tooltip>
        </div>
    );
}
