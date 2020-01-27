import styled from "styled-components";

import { Field as ReduxField } from "redux-form";

export const Field = styled(ReduxField)`
    margin-top: 14px;

    div[class*="ListaAutoCompleta-input"] {
        width: ${({ width }) => width};

        padding-bottom: 10px;

        & > div + div {
            padding-bottom: 10px;
        }

        p[class*="ListaAutoCompleta-placeholder"] {
            transform: translateY(-4px);
        }

        p[class*="ListaAutoCompleta-singleValue"] {
            transform: translateY(-9px);
        }
    }

    div[class*="MuiChip"],
    input {
        transform: translateY(-10px);
    }
`;
