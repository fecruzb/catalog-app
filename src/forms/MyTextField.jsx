import React from "react"
import PropTypes from "prop-types"

import { TextField } from "@mui/material"

import FieldConnector from "./MyField"

const MyTextField = ({ name, error, touched, onChange, onBlur, ...props }) => {
  const handleChange = (event) => onChange(event.target.value)
  return (
    <TextField
      fullWidth
      onChange={handleChange}
      onBlur={onBlur}
      name={name}
      error={touched && !!error}
      helperText={touched && error}
      {...props}
    />
  )
}

MyTextField.defaultProps = {
  error: undefined,
}

MyTextField.propTypes = {
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  touched: PropTypes.bool.isRequired,
}

export default FieldConnector(MyTextField)
