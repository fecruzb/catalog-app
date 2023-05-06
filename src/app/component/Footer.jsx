import React from "react"

import { Box, Grid, Typography } from "@mui/material"

import Container from "./Container"

const Footer = () => (
  <Box py={1} bgcolor="primary.main" color="white">
    <Container>
      <Grid container alignItems="center">
        <Grid item xs>
          <Typography>Copyright 2023</Typography>
        </Grid>
        <Grid item>RXD</Grid>
      </Grid>
    </Container>
  </Box>
)

export default Footer
