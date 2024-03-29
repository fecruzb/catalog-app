import React from "react"
import PropTypes from "prop-types"

import { Box, Grid, Typography } from "@mui/material"

import Flag from "./Flag"
import Photo from "./Photo"

const AuthorCard = ({ author }) => (
  <Box p={2}>
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <Photo slug={author.slug} sx={{ height: "128px", width: "128px" }} />
      </Grid>
      <Grid item xs>
        <Typography variant="h6">{author.name}</Typography>
        <Typography>
          <Flag code={author.country} width="36px" />
        </Typography>
      </Grid>
    </Grid>
  </Box>
)

AuthorCard.propTypes = {
  author: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
}

export default AuthorCard
