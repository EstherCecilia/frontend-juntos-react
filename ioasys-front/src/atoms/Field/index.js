import React from "react";

import { Field as FormField } from "redux-form";

import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles({
    root: {
        "& label": {
            marginBottom: 0
        }
    }
});

export default function Field({
    show,
    id,
    noReduxForm,
    render,
    label,
    onChange,
    className,
    style,
    ...props
}) {
    const classes = useStyles();

    return show !== false ? (
        <FormControl className={`${classes.root} ${className}`} style={style}>
            {!noReduxForm ? (
                <FormField
                    name={id}
                    component={render}
                    label={label}
                    onChange={onChange}
                    {...props}
                />
            ) : (
                render({
                    label,
                    input: { onChange },
                    meta: { name: id, form: "noReduxForm" }
                })
            )}
        </FormControl>
    ) : null;
}
