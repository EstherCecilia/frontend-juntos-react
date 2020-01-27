import React, { useState, useEffect } from "react";

import { Field, change } from "redux-form";

import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";

import MuiTextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing.unit
    }
}));

export default function TextField({
    show,
    disabled,
    id,
    placeholder,
    data,
    value,
    width = "100px",
    ...props
}) {
    const classes = useStyles();

    return show ? (
        <FormControl
            className={classes.formControl}
            style={{ minWidth: width }}
        >
            <Field
                name={id}
                disabled={disabled}
                type="text"
                label={placeholder}
                valueToSet={value}
                {...props}
                component={FieldComponent}
            ></Field>
        </FormControl>
    ) : null;
}

const FieldComponent = ({
    input,
    label,
    type,
    meta: { form, dispatch },
    valueToSet
}) => {
    const { name, onChange } = input;

    const [alreadySet, setAlreadySet] = useState(false);

    useEffect(() => {
        if (!alreadySet) {
            dispatch(change(form, name, valueToSet));
            setAlreadySet(true);
        }
    }, [valueToSet]);

    return (
        <MuiTextField
            label={label}
            type={type}
            fullWidth
            {...input}
            onChange={onChange}
        />
    );
};
