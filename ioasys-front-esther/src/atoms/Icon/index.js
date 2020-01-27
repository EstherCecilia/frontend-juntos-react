import React from "react";

import Color from "color";

import { faTimes } from "@fortawesome/free-solid-svg-icons";

import Tooltip from "@material-ui/core/Tooltip";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container } from "./styles";

export default function Icon({
    icon = faTimes,
    tooltip,
    color,
    invert,
    ...props
}) {
    if (typeof color === "string")
        if (!invert) color = { primary: color };
        else
            color = {
                primary: Color(color)
                    .fade(0.8)
                    .string(),
                secondary: color,
                hover: {
                    secondary: Color(color)
                        .fade(0.2)
                        .string()
                }
            };

    color = {
        primary: "#FF6E0D",
        secondary: "#FFF",
        hover: {
            primary: Color(color.primary || "#FF6E0D")
                .fade(0.3)
                .string(),
            ...color.hover
        },
        ...color
    };

    color = {
        ...color
    };

    return (
        <>
            <Tooltip title={tooltip} disableHoverListener={!tooltip}>
                <Container colorProp={color} {...props}>
                    <FontAwesomeIcon icon={icon} color={color.secondary} />
                </Container>
            </Tooltip>
        </>
    );
}
