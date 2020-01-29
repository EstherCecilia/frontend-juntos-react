import React, { useState, useEffect } from "react";

import { change } from "redux-form";

import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";


import ListaAutoCompleta from "./ListaAutoCompleta";

export const renderListaAutoCompleta = ({
    dados,
    data,
    input,
    label,
    custom,
    customComponents,
    valueToSet,
    meta: { form, dispatch },
    ...props
}) => {
    const { name, onChange } = input;

    const [alreadySet, setAlreadySet] = useState(false);

    useEffect(() => {
        if (!alreadySet) {
            dispatch(change(form, name, valueToSet));
            setAlreadySet(true);
        }
    }, [valueToSet]);

    function handleChange(data) {
        if (typeof data !== "object") return;

        onChange && onChange(data);
    }

    return (
        <ListaAutoCompleta
            placeholder={label}
            dados={dados || data}
            custom={custom}
            customComponents={customComponents}
            {...props}
            {...input}
            onChange={handleChange}
        />
    );
};