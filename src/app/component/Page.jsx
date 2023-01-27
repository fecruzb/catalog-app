import React from "react"
import PropTypes from "prop-types"

import { Box, Container } from "@mui/material"

const Page = ({ children }) => (
  <Box py={3}>
    <Container maxWidth="100%">{children}</Container>
  </Box>
)
Page.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Page
