import styled from "styled-components";

import MuiChipInput from "material-ui-chip-input";

export const ChipInput = styled(MuiChipInput)`
    transform: translateY(9px);

    div[class*="MuiInputBase"] {
        width: ${({ width }) => width};
    }

    input {
        padding-bottom: 17px;

        &::placeholder {
            opacity: 0.6;
        }
    }
`;
