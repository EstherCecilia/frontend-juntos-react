import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";

import { Field, change } from "redux-form";

import { ChipInput } from "./styles";

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120
    }
}));

export default function ChipInputField({
    show,
    disabled,
    id,
    placeholder,
    width
}) {
    const [data, setData] = useState([]);

    const dispatch = useDispatch();

    const classes = useStyles();

    const handleChange = form => value => {
        const newDataList = [...data, value[0]];

        setData(newDataList);
        dispatch(change(form, id, newDataList));
    };

    const handleDeleteChip = form => (value, chipIndex) => {
        const filteredData = data.filter((el, index) => index !== chipIndex);

        setData(filteredData);
        dispatch(change(form, id, filteredData));
    };

    return show !== false ? (
        <FormControl className={classes.formControl}>
            <Field
                name={id}
                disabled={disabled}
                component={({ input: { onChange }, meta: { form } }) => (
                    <ChipInput
                        value={data}
                        placeholder={placeholder}
                        width={width}
                        blurBehavior="ignore"
                        onChange={handleChange(form)}
                        onDelete={handleDeleteChip(form)}
                    />
                )}
            />
        </FormControl>
    ) : null;
}
