import React from "react"
import PropTypes from "prop-types"

import { Divider, Grid } from "@mui/material"

import Item from "./Item"

const BookList = ({ books, onDelete, onEdit, onView, actions, dense = false }) => (
  <Grid container spacing={2}>
    {books.map((book) => (
      <Grid item key={book.id} xs={dense ? 0 : 6}>
        <Item
          dense={dense}
          book={book}
          onEdit={actions ? () => onEdit(book) : false}
          onDelete={actions ? () => onDelete(book) : false}
          onView={() => onView(book)}
        />
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
