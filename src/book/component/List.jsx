import React from "react"
import PropTypes from "prop-types"

import { Divider, Grid } from "@mui/material"

import Item from "./Item"

const BookList = ({ books }) => (
  <Grid container spacing={2}>
    {books.map((book) => (
      <Grid item key={book.id} xs={12}>
        <Item book={book} />
        <Divider />
      </Grid>
    ))}
  </Grid>
)

BookList.defaultProps = {
  books: [],
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
    }),
  ),
}

export default BookList
