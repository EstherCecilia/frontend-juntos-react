import styled from "styled-components";

import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ChipStyled = styled(Chip)`
    && {
        margin: 0 3px;

        color: ${props => (props.color ? props.color : "#8d8d8d")};
        background-color: ${props =>
            props.backgroundColor ? props.backgroundColor : "#dcdcdc"};
    }
`;
export const AvatarStyled = styled(Avatar)`
    && {
        color: ${props => (props.color ? props.color : "#fff")};
        background-color: rgba(0, 0, 0, 0.1);
    }
`;
export const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
    margin-right: 2px;
    margin-left: 2px;
`;
