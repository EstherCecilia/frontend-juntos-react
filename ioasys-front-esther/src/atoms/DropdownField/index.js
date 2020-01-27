import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";

import { renderListaAutoCompleta } from "components/Formularios/ReduxFields";

import { Field } from "./styles";

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing.unit
    }
}));

export default function DropdownField({
    show,
    disabled,
    id,
    placeholder,
    data,
    value,
    width,
    ...props
}) {
    const classes = useStyles();

    return show !== false ? (
        <FormControl
            className={classes.formControl}
            style={{ minWidth: width || "100px" }}
        >
            <Field
                name={id}
                disabled={disabled}
                label={placeholder}
                dados={data}
                valueToSet={value}
                component={renderListaAutoCompleta}
                {...props}
            />
        </FormControl>
    ) : null;
}
