import styled, { css } from "styled-components";

import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";

import Color from "color";

export const ChipStyled = styled(Chip)`
    && {
        background-color: ${({ color }) =>
            color
                ? Color(color)
                      .fade(0.8)
                      .string()
                : "#ccc"};
        cursor: ${props => (props.action ? "pointer" : "default")};

        :hover,
        :active,
        :focus {
            background-color: ${({ color }) =>
                Color(color)
                    .fade(0.7)
                    .string()};
            cursor: pointer;
        }

        ${props =>
            props.color &&
            css`
                color: ${({ color }) => color};
            `}

        ${props =>
            props.hover &&
            css`
                cursor: pointer;
            `}
    }
`;
export const ContentTypography = styled(Typography)``;
