import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AutoComplete from '@material-ui/lab/Autocomplete';

const ComboBox = ({
    options, 
    width,
    getOptionLabel,
    id,
}) => (
    <FormControl style={{width: width, margin: "8px"}}>
        <AutoComplete
            id={id}
            options={options}
            getOptionLabel={getOptionLabel}
            width={width}
            renderInput={params => (
                <TextField {...params} label="Cursos" fullWidth />
            )}
        />
    </FormControl>
);

export default ComboBox;