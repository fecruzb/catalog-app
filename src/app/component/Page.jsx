import React from "react"
import PropTypes from "prop-types"

import { Box } from "@mui/material"

import Container from "./Container"

const Page = ({ children }) => (
  <Box py={2}>
    <Container>{children}</Container>
  </Box>
)
Page.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Page
