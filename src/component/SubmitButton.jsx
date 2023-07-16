import React from "react"
import PropTypes from "prop-types"

import { useFormikContext } from "formik"

import { Button } from "@mui/material"
import CircularProgress from "@mui/material/CircularProgress"

const MySubmit = ({ children, ...props }) => {
  const { isValid, isSubmitting, dirty } = useFormikContext()
  return (
    <Button {...props} size="large" disabled={!isValid || isSubmitting || !dirty}>
      {isSubmitting ? <CircularProgress /> : children}
    </Button>
  )
}

MySubmit.defaultProps = {
  children: "Submit",
}

MySubmit.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MySubmit
