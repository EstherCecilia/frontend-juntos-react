import styled, { css } from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import Color from "color";
export const AvatarStyled = styled(Avatar)`
    && {
        background-color: ${props =>
            Color(props.backgroundColor)
                .fade(0.9)
                .string()};
        ${props =>
            props.sizes &&
            css`
                width: ${props.sizes};
                height: ${props.sizes};
            `}
        ${props =>
            props.hover &&
            css`
                :hover {
                    background-color: ${props =>
                        Color(props.backgroundColor)
                            .fade(0.7)
                            .string()};
                    cursor: pointer;
                }
            `}
    }
`;
