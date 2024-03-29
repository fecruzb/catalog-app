import React from "react"
import PropTypes from "prop-types"

import { Divider, Grid } from "@mui/material"

import Item from "./Item"

const AuthorList = ({ authors, onEdit, onDelete, onView }) => (
  <Grid container spacing={2} direction="column">
    {authors.map((author) => (
      <Grid item key={author.id} xs>
        <Item
          author={author}
          onEdit={() => onEdit(author)}
          onDelete={() => onDelete(author)}
          onView={() => onView(author)}
        />
        <Divider sx={{ mt: 1 }} />
      </Grid>
    ))}
  </Grid>
)
AuthorList.defaultProps = {
  authors: [],
  onDelete: undefined,
  onEdit: undefined,
  onView: undefined,
}

AuthorList.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }),
  ),
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onView: PropTypes.func,
}

export default AuthorList
