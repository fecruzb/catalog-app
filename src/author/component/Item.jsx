import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

import { Avatar, Box, Grid, Typography } from "@mui/material"

const AuthorItem = ({ author }) => (
  <Box bgcolor="grey.100" p={2}>
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <Avatar
          sx={{ height: "64px", width: "64px" }}
          src={`https://robohash.org/${author.name}?bgset=bg2`}
        />
      </Grid>
      <Grid item xs>
        <Link to={`/author/${author.id}`}>
          <Typography variant="h6">{author.name}</Typography>
        </Link>
        <Typography>id: {author.id}</Typography>
        <Typography>country: {author.country}</Typography>
      </Grid>
    </Grid>
  </Box>
)

AuthorItem.propTypes = {
  author: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
}

export default AuthorItem
