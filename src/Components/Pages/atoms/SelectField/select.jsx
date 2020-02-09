import React, {useState, useEffect} from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "react-select";
//import Select from "react-dropdown-select";

const ReduxFormSelect = props => {
    const { input, options, placeholder, isClearable, isMulti, isSearchable } = props;
  
    return (
        <FormControl style={{width: "31.5vw", minWidth: "100px"}}>
            <Select 
                className="selectField"
                styles={customStyles}
                {...input} 
                isClearable={isClearable}
                isMulti={isMulti}
                isSearchable={isSearchable}
                onChange={value => input.onChange(value)} 
                onBlur={() => input.onBlur(input.value)} 
                options={options}
                placeholder={placeholder}
            />
        </FormControl>
    )
  }

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid black',
      color: "black",
      backgroundColor: state.isSelected ? '#e6ffff' : 'white',
      '&:hover': {
        backgroundColor: "#e6ffff",
      }
    }),
    control: (provided, state) => ({
      ...provided,
      marginTop: "5%",
      backgroundColor: "0",
      borderColor: "#000",
      boxShadow: state.isFocused ? "#000" : 0,
      '&:hover': {
        borderColor: "#000"
      },
    }),
    placeholder: (provided) => ({
        ...provided,
        color: "black",
        fontWeight: "bold",
    })
  }

  export default ReduxFormSelect;

//export default SelectField;