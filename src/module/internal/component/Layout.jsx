import React from "react"
import PropTypes from "prop-types"

import { Grid } from "@mui/material"

import Footer from "./Footer"
import Header from "./Header"
import Page from "./Page"

const Layout = ({ children }) => (
  <Grid container direction="column" minHeight="100%">
    <Grid item xs={false}>
      <Header />
    </Grid>
    <Grid item xs>
      <Page>{children}</Page>
    </Grid>
    <Grid item xs={false}>
      <Footer />
    </Grid>
  </Grid>
)
Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout
