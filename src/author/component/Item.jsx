import React from "react"
import PropTypes from "prop-types"

import { Avatar, Box, ButtonBase, Grid, IconButton, Stack, Typography } from "@mui/material"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import EditIcon from "@mui/icons-material/Edit"

const AuthorItem = ({ author, onEdit, onDelete, onView }) => (
  <Box bgcolor="grey.100" p={2}>
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
