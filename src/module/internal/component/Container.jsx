import React from "react"
import PropTypes from "prop-types"

import { Container as MuiContainer } from "@mui/material"

const Container = ({ children, ...props }) => (
  <MuiContainer maxWidth={false} {...props}>
    {children}
  </MuiContainer>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

Container.defaultProps = {
  maxWidth: false,
}

export default Container
