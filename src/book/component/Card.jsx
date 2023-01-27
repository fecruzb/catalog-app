import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

import { Avatar, Box, Grid, Typography } from "@mui/material"

const BookCard = ({ book }) => (
  <Box bgcolor="grey.100" p={2}>
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <Avatar
          variant="square"
          sx={{ height: "80px", width: "64px" }}
          src={`https://robohash.org/${book.title}?set=set4&bgset=bg1`}
        />
      </Grid>
      <Grid item xs>
        <Link to={`/book/${book.id}`}>
          <Typography variant="h6">{book.title}</Typography>
        </Link>
        <Typography>id: {book.id}</Typography>
        <Typography>year: {book.year}</Typography>
      </Grid>
    </Grid>
  </Box>
)

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
}

export default BookCard
