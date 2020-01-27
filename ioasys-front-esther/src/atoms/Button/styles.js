import styled, { css } from "styled-components";

import MuiButton from "@material-ui/core/Button";

export const Container = styled(MuiButton)`
    height: auto !important;
    min-height: 30px !important;
    max-height: 30px !important;
    padding: 0 13px 0 8px !important;
    border-radius: 20px !important;
    margin: 10px 0px;

    background: ${({ colorObject: color }) =>
        (color ? color.primary : "#ff6e0d") + " !important"};
    color: white !important;
    text-transform: uppercase !important;

    letter-spacing: 1.5px !important;
    font-size: 12px !important;
    font-weight: 400 !important;
    line-height: normal !important;

    text-decoration: none !important;

    transition: all 200ms ease;

    &:hover {
        background: ${({ colorObject: color }) =>
            (color ? color.hover : "#ffa86e") + " !important"};
    }

    ${({ disabled }) =>
        disabled &&
        css`
            background: ${({ colorObject: color }) => "#ffa86e !important"};
        `}
`;

export const Icon = styled.div`
    margin: 0px;
    margin-right: 7px;
`;
