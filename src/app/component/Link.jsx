import React from "react"
import { Link as RouterLink } from "react-router-dom"
import PropTypes from "prop-types"

import { Link as MuiLink } from "@mui/material"

const Link = ({ children, to, color }) => (
  <MuiLink component={RouterLink} underline="hover" color={color} to={to}>
    {children}
  </MuiLink>
)

Link.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  to: PropTypes.string,
}

Link.defaultProps = {
  to: "/",
  color: "secondary",
}

export default Link
