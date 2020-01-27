import styled from "styled-components";

import IconButton from "@material-ui/core/IconButton";

import { toCssUnit } from "utils/css";

export const Container = styled(IconButton)`
    display: flex;
    justify-content: center;
    align-items: center;

    opacity: ${({ disabled }) => (disabled ? 0.65 : 1)};

    width: ${({ sizeProp: size }) => toCssUnit(size)};
    height: ${({ sizeProp: size }) => toCssUnit(size)};
    border-radius: 50% !important;

    padding: 0 !important;

    background: ${({ colorProp: color }) => color.primary} !important;

    cursor: pointer;
    transition: all 150ms ease;

    svg {
        color: ${({ colorProp: color }) => color.secondary} !important;
    }

    &:hover {
        background: ${({ colorProp: color }) => color.hover.primary} !important;

        svg {
            color: ${({ colorProp: color }) =>
                color.hover.secondary} !important;
        }
    }
`;
