import styled from "styled-components";

import MuiFormControl from "@material-ui/core/FormControl";
import { DateTimePicker as MuiDateTimePicker } from "material-ui-pickers";

export const FormControl = styled(MuiFormControl)`
    flex-direction: row !important;
    align-items: center !important;

    width: 50%;

    & > svg {
        margin-top: 10px;
        margin-right: 10px;
    }

    & > div {
        width: 100%;
    }
`;

export const DateTimePicker = styled(MuiDateTimePicker)`
    & > div {
        background-color: transparent !important;

        &:hover::before {
            border-bottom: 2px solid rgba(0, 0, 0, 0.87) !important;
        }
    }
`;
