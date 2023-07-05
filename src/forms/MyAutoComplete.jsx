import React from "react"
import PropTypes from "prop-types"

import { Autocomplete, Box, TextField } from "@mui/material"

import FieldConnector from "./MyField"

const MyAutoComplete = ({
  name,
  labelAccessor,
  valueAccessor,
  label,
  touched,
  value,
  onChange,
  onBlur,
  error,
  options,
  icon,
}) => {
  const handleChange = (event, value) => {
    value ? onChange(value?.[valueAccessor]) : onChange(null)
  }

  const currentValue = options.find((o) => o[valueAccessor] === value)

  return (
    <Autocomplete
      name={name}
      value={currentValue}
      onChange={handleChange}
      onBlur={onBlur}
      options={options}
      autoHighlight
      getOptionLabel={(option) => option?.[labelAccessor]}
      renderOption={(props, option) => (
        <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
          {icon && icon({ option, selected: currentValue?.value === option?.value })}
          {option?.[labelAccessor]}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          fullWidth
          error={touched && !!error}
          helperText={touched && error}
        />
      )}
    />
  )
}

MyAutoComplete.defaultProps = {
  error: undefined,
  labelAccessor: "label",
  valueAccessor: "value",
  icon: undefined,
}

MyAutoComplete.propTypes = {
  error: PropTypes.string,
  icon: PropTypes.func,
  label: PropTypes.string.isRequired,
  labelAccessor: PropTypes.string,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  touched: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  valueAccessor: PropTypes.string,
}

export default FieldConnector(MyAutoComplete)
