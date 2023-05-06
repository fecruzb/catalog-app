import React from "react"
import PropTypes from "prop-types"

import { Avatar, Box, Button, ButtonBase, Grid, Stack, Typography } from "@mui/material"

const AuthorItem = ({ author, onEdit, onDelete, onView }) => (
  <Box>
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <ButtonBase onClick={onView}>
          <Avatar
            sx={{ height: "64px", width: "64px" }}
            src={`https://robohash.org/${author.name}?bgset=bg2`}
          />
        </ButtonBase>
      </Grid>
      <Grid item xs>
        <Typography variant="h6" fontWeight="bold">
          {author.name}
        </Typography>
        <Typography>id: {author.id}</Typography>
        <Typography>country: {author.country}</Typography>
      </Grid>
      {(onEdit || onDelete) && (
        <Grid item>
          <Stack direction="row" spacing={1}>
            {onEdit && (
              <Button variant="outlined" color="warning" size="small" onClick={onEdit}>
                Edit
              </Button>
            )}
            {onDelete && (
              <Button variant="outlined" color="error" size="small" onClick={onDelete}>
                Delete
              </Button>
            )}
          </Stack>
        </Grid>
      )}
    </Grid>
  </Box>
)

AuthorItem.defaultProps = {
  onDelete: undefined,
  onEdit: undefined,
  onView: undefined,
}

AuthorItem.propTypes = {
  author: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onView: PropTypes.func,
}

export default AuthorItem
