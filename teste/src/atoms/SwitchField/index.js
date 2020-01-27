import React, { useState } from "react";

import FormControlLabel from "@material-ui/core/FormControlLabel";

import Field from "../Field";

import { getSwitchByVariant } from "./variants";

export default function SwitchField({
    value = false,
    variant = "default",
    onChange,
    ...props
}) {
    const [checked, setChecked] = useState(value);

    function handleChange(event) {
        setChecked(event.target.checked);

        onChange && onChange(event.target.checked);
    }

    return (
        <Field
            {...props}
            onChange={handleChange}
            render={({ label, input: { onChange } }) => (
                <FormControlLabel
                    control={getSwitchByVariant(variant, {
                        disableRipple: true,
                        checked,
                        onChange
                    })}
                    label={label}
                />
            )}
        />
    );
}
