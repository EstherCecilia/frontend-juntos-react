import React, {useState, useEffect} from "react";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "react-dropdown-select";
import InputLabel from "@material-ui/core/InputLabel";

function SelectField ({
    name,
    label,
    placeholder,
    width,
    options,
    children,
    meta: { touched, error },
}) {
    return(
    <FormControl error={touched && error} style={{width: width, minWidth: "100px", margin: "8px"}}>
        {/* <InputLabel htmlFor="age-native-simple">{label}</InputLabel> */}
        <Select 
            name={name}
            placeholder={placeholder}
            options={options}
            onChange={(event, value) => console.log(value)}
       >{children}</Select>
    </FormControl>
    );
};

export default SelectField;