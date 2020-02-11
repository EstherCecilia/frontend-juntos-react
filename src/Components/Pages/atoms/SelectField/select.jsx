import React, {useState, useEffect} from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "react-select";
import FormHelperText from "@material-ui/core/FormHelperText";
//import Select from "react-dropdown-select";

const ReduxFormSelect = props => {
    const { input, options, placeholder, isClearable, isMulti, isSearchable } = props;
  
    return (
      <FormControl style={{width: "31.5vw", minWidth: "100px", fontFamily: ('Nunito Sans', 'sans-serif')}}>
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
        backgroundColor: "#FF2E63",
      }
    }),
    control: (provided, state) => ({
      ...provided,
      marginTop: "5%",
      backgroundColor: "0",
      borderColor: state.isFocused ? "#FF2E63" : "#000",
      boxShadow: state.isFocused ? "#FF2E63" : "#000",
      '&:hover': {
        borderColor: state.isFocused ? "#FF2E63" : "#000",
        boxShadow: "#FF2E63"
      },
    }),
    placeholder: (provided, state) => ({
        ...provided,
        color: state.isFocused ? "#FF2E63" : "black",
        fontWeight: "bold",
        fontSize: "14px",
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: state.isFocused ? "#FF2E63" : "black",
      '&:hover': {
        color: "#FF2E63"
      }
    }),
    clearIndicator: (provided) => ({
      ...provided,
      color: "black",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      color: "black",
    })
  }

  export default ReduxFormSelect;

//export default SelectField;