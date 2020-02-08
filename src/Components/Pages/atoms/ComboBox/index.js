import React, {useState} from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AutoComplete from '@material-ui/lab/Autocomplete';

function ComboBox ({
    options, 
    width,
    value,
    getOptionLabel,
    name,
}) {
    return (
    <FormControl style={{width: width, margin: "8px"}}>
        <AutoComplete
            name={name}
            options={options}
            value={value}
            getOptionLabel={getOptionLabel}
            onChange={(event, value) => console.log(value)}
            width={width}
            renderInput={params => (
                <TextField {...params} label="Cursos" fullWidth />
            )}
        />
    </FormControl>
    )
};

export default ComboBox;