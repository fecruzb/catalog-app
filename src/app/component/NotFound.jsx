import React from "react"
import PropTypes from "prop-types"

import { Box } from "@mui/material"

const NotFound = ({ children }) => <Box>{children}</Box>

NotFound.propTypes = {
  children: PropTypes.element.isRequired,
}

export default NotFound
