import React from "react"
import PropTypes from "prop-types"

import { Avatar, Box, Button, ButtonBase, Grid, Stack, Typography } from "@mui/material"

const BookItem = ({ book, onDelete, onEdit, onView }) => (
  <Box bgcolor="grey.100" p={2}>
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <ButtonBase onClick={onView}>
          <Avatar
            variant="square"
            sx={{ width: "128px", height: "128px" }}
            src={`https://robohash.org/${book.title}?set=set4&bgset=bg1`}
          />
        </ButtonBase>
      </Grid>
      <Grid item xs>
        <Typography variant="h6">{book.title}</Typography>
        <Typography>ID: {book.id}</Typography>
        <Typography>Year: {book.year}</Typography>
        <Typography>ISBN: {book.ISBN}</Typography>
        <Typography>Author: {book.author?.name}</Typography>
      </Grid>
      {(onEdit || onDelete) && (
        <Grid item>
          <Stack direction="row" spacing={1}>
            {onEdit && (
              <Button
                variant="outlined"
                color="warning"
                size="small"
                onClick={onEdit}
                sx={{ borderWidth: "1px", borderStyle: "dotted" }}
              >
                Edit
              </Button>
            )}
            {onDelete && (
              <Button
                variant="outlined"
                color="error"
                size="small"
                onClick={onDelete}
                sx={{ borderWidth: "1px", borderStyle: "dashed" }}
              >
                Delete
              </Button>
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
