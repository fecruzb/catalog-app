import React from "react"
import PropTypes from "prop-types"

import { Box, Grid, Typography } from "@mui/material"

import { Link } from "src/module/internal/component"

import Photo from "../../author/component/Photo"
import Cover from "./Cover"

const BookCard = ({ book }) => (
  <Box p={2}>
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <Cover slug={book.slug} sx={{ height: "148px", width: "148px" }} />
      </Grid>
      <Grid item xs>
        <Typography variant="h6" color="primary">
          {book.title}
        </Typography>
        <Typography variant="body2">ISBN: {book.ISBN}</Typography>
        <Typography variant="body2" paragraph>
          Year: {book.year}
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Photo slug={book.author.slug} sx={{ height: "48px", width: "48px" }} />
          </Grid>
          <Grid item>
            {book?.author && (
              <Link to={`/author/${book.author.id}`} color="primary">
                <Typography color="primary" variant="subtitle1">
                  {book.author?.name}
                </Typography>
              </Link>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Box>
)

BookCard.propTypes = {
  book: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.shape({
      id: PropTypes.number.isRequired,
      slug: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
    ISBN: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
}

export default BookCard
