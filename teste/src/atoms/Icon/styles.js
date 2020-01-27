import styled, { css } from "styled-components";

import Avatar from "@material-ui/core/Avatar";

export const Container = styled(Avatar)`
    background-color: ${({ colorProp }) => colorProp.primary} !important;

    transition: all 300ms ease;

    & > svg {
        transition: all 300ms ease;
    }

    ${({ colorProp }) =>
        colorProp.hover &&
        css`
            &:hover {
                background: ${colorProp.hover.primary} !important;

                & > svg {
                    color: ${colorProp.hover.secondary} !important;
                }
            }
        `};
`;
