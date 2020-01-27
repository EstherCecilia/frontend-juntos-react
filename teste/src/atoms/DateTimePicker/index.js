import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import { Field } from "redux-form";

import moment from "moment";

import { FormControl, DateTimePicker } from "./styles";

export default function Date({
    id,
    icon = faCalendarAlt,
    label,
    value,
    onChange,
    style,
    ...props
}) {
    function handleChangeDate(date) {
        onChange && onChange(date);
    }

    return (
        <FormControl style={style}>
            <FontAwesomeIcon color="#FF6E0D" icon={icon} size="lg" fixedWidth />
            <Field
                name={id}
                label={label}
                component={Picker}
                onChange={handleChangeDate}
                value={value}
                {...props}
            />
        </FormControl>
    );
}

function Picker({
    input: { onChange, value },
    label,
    nullValue,
    shouldDisableDate,
    ...props
}) {
    const parsedDate =
        typeof value === "string" ? moment(value, "YYYY-MM-DD HH:mm") : value;

    const [date, setDate] = useState(
        value ? parsedDate : nullValue ? null : moment()
    );

    function handleChangeDate(date) {
        setDate(date);
    }

    useEffect(() => {
        date && onChange(date.format("YYYY-MM-DD HH:mm"));
    }, [date]);

    return (
        <DateTimePicker
            /* Options */
            label={label}
            variant="filled"
            shouldDisableDate={day =>
                shouldDisableDate && shouldDisableDate(day, moment())
            }
            ampm={false}
            autoOk
            showTodayButton
            /* Value */
            value={date}
            onChange={handleChangeDate}
            /* Labels */
            cancelLabel="Cancelar"
            clearLabel="Limpar"
            okLabel="Confirmar"
            todayLabel="Agora"
            {...props}
        />
    );
}
