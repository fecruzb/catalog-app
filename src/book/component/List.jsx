import React from "react"
import PropTypes from "prop-types"

import { Divider, Grid } from "@mui/material"

import Item from "./Item"

const BookList = ({ books, onDelete, onEdit, onView, actions }) => (
  <Grid container spacing={2}>
    {books.map((book) => (
      <Grid item key={book.id} xs={6}>
        <Item
          book={book}
          onEdit={actions ? () => onEdit(book) : false}
          onDelete={actions ? () => onDelete(book) : false}
          onView={actions ? () => onView(book) : false}
        />
        <Divider sx={{ mt: 1 }} />
      </Grid>
    ))}
  </Grid>
)

BookList.defaultProps = {
  books: [],
  onDelete: undefined,
  onEdit: undefined,
  onView: undefined,
  actions: true,
}

BookList.propTypes = {
  actions: PropTypes.bool,
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
