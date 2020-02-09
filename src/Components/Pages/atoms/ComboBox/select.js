import React, {useState, useEffect} from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "react-dropdown-select";

const ReduxFormSelect = props => {
    const { input, options } = props;
  
    return (
        <FormControl style={{width: "31.5vw", minWidth: "100px", margin: "8px"}}>
            <Select 
                {...input} 
                onChange={value => input.onChange(value)} 
                onBlur={() => input.onBlur(input.value)} 
                options={options}
                placeholder={"Cursos"}
            />
        </FormControl>
    )
  }


  export default ReduxFormSelect;