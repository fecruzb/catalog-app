import React from "react"
import PropTypes from "prop-types"

import CssBaseline from "@mui/material/CssBaseline"
import { createTheme, ThemeProvider } from "@mui/material/styles"

import "@fontsource/nunito-sans/index.css"

const theme = createTheme({
  typography: {
    fontFamily: "Nunito Sans",
    fontSize: 14,
  },
})

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
)

Theme.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Theme
