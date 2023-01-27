import React from "react"
import { Link } from "react-router-dom"

import { Box, Grid, Typography } from "@mui/material"

const Home = () => (
  <Box>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box bgcolor="grey.100" width="100%" py={3} px={2}>
          <Link to="/book">
            <Typography>Books</Typography>
          </Link>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box bgcolor="grey.100" width="100%" py={3} px={2}>
          <Link to="/author">
            <Typography>Authors</Typography>
          </Link>
        </Box>
      </Grid>
    </Grid>
  </Box>
)

export default Home
