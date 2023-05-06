import React from "react"
import PropTypes from "prop-types"

import { Avatar, Box, Grid, Typography } from "@mui/material"

import { Link } from "@/app/component"

const BookCard = ({ book }) => (
  <Box p={2}>
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <Avatar
          variant="square"
          sx={{ height: "128px", width: "128px" }}
          src={`https://robohash.org/${book.title}?set=set4&bgset=bg1`}
        />
      </Grid>
      <Grid item xs>
        <Typography variant="h6" color="primary">
          {book.title}
        </Typography>

        {book?.author && (
          <Link to={`/author/${book.author.id}`} color="primary">
            <Typography color="primary" variant="subtitle1">
              {book.author?.name}
            </Typography>
          </Link>
        )}

        <Typography>ISBN: {book.ISBN}</Typography>
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
