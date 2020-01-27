import React from "react";

import Color from "color";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import Tooltip from "@material-ui/core/Tooltip";

import { Container } from "./styles";

export default function Circle({
    icon = faTimes,
    tooltip,
    size = 35,
    color = {},
    onClick,
    ...props
}) {
    if (typeof color === "string")
        color = { primary: "#fff", secondary: color };

    color = {
        primary: "#eee",
        secondary: "#ff7921",
        hover: {
            primary: Color(color.primary || "#eee")
                .fade(0.3)
                .string(),
            secondary: Color(color.secondary || "#ff7921")
                .fade(0.1)
                .string(),
            ...color.hover
        },
        ...color
    };

    let sizeLabel = "xs";

    if (size >= 50) sizeLabel = "sm";

    return (
        <>
            <Tooltip title={tooltip} disableHoverListener={!tooltip}>
                <Container
                    size="large"
                    variant="extended"
                    sizeProp={size}
                    colorProp={color}
                    onClick={onClick}
                    {...props}
                >
                    <FontAwesomeIcon icon={icon} size={sizeLabel} />
                </Container>
            </Tooltip>
        </>
    );
}
