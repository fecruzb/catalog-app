import React from "react"
import PropTypes from "prop-types"

import { Divider, Grid } from "@mui/material"

import Item from "./Item"

const BookList = ({ books, onDelete, onEdit, onView }) => (
  <Grid container spacing={2}>
    {books.map((book) => (
      <Grid item key={book.id} xs={12}>
        <Item
          book={book}
          onEdit={() => onEdit(book)}
          onDelete={() => onDelete(book)}
          onView={() => onView(book)}
        />
        <Divider />
      </Grid>
    ))}
  </Grid>
)

BookList.defaultProps = {
  books: [],
  onDelete: undefined,
  onEdit: undefined,
  onView: undefined,
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
    }),
  ),
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onView: PropTypes.func,
}

export default BookList
