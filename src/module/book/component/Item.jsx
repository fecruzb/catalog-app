import React from "react"
import PropTypes from "prop-types"

import { Avatar, Box, ButtonBase, Grid, IconButton, Stack, Typography } from "@mui/material"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import EditIcon from "@mui/icons-material/Edit"

import { Link } from "src/module/internal/component"

import Cover from "./Cover"

const BookItem = ({ book, onDelete, onEdit, onView, dense = false }) => (
  <Box p={2}>
    <Grid container spacing={2} alignItems="center" direction="row">
      <Grid item>
        <ButtonBase onClick={onView}>
          <Cover variant="square" sx={{ width: "128px", height: "128px" }} slug={book.slug} />
        </ButtonBase>
      </Grid>
      {!dense && (
        <Grid item xs>
          <Link to={`/book/${book.id}`}>
            <Typography variant="h6" color="secondary">
              {book.title}
            </Typography>
          </Link>
          {book?.author && (
            <Link to={`/author/${book.author.id}`} color="primary">
              <Typography color="primary" variant="subtitle1">
                {book.author?.name}
              </Typography>
            </Link>
          )}

          <Typography>Year: {book.year}</Typography>
          <Typography>ISBN: {book.ISBN}</Typography>
        </Grid>
      )}
      {(onEdit || onDelete) && (
        <Grid item>
          <Stack direction="row" spacing={1}>
            {onEdit && (
              <IconButton
                sx={{ borderWidth: "1px", borderStyle: "dotted" }}
                size="large"
                onClick={onEdit}
                color="warning"
              >
                <EditIcon />
              </IconButton>
            )}
            {onDelete && (
              <IconButton
                sx={{ borderWidth: "1px", borderStyle: "dashed" }}
                size="large"
                onClick={onDelete}
                color="error"
              >
                <DeleteForeverIcon />
              </IconButton>
            )}
          </Stack>
        </Grid>
      )}
    </Grid>
  </Box>
)

BookItem.defaultProps = {
  onDelete: undefined,
  onEdit: undefined,
  onView: undefined,
}

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    ISBN: PropTypes.number.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onView: PropTypes.func,
}

export default BookItem
