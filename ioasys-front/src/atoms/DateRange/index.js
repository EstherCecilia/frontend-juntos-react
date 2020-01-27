import React from "react";

import { renderReactData } from "components/Formularios/ReduxFields";

import Field from "../Field";

import { Container } from "./styles";

export default function DateRange({ border, className, style, ...props }) {
    return (
        <Container border={border} className={className} style={style}>
            <Field {...props} render={renderReactData} />
        </Container>
    );
}
