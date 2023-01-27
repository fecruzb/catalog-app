import React from "react"
import PropTypes from "prop-types"

import { Divider, Grid } from "@mui/material"

import Item from "./Item"

const AuthorList = ({ authors }) => (
  <Grid container spacing={2}>
    {authors.map((author) => (
      <Grid item key={author.id} xs={12}>
        <Item author={author} />
        <Divider />
      </Grid>
    ))}
  </Grid>
)
AuthorList.defaultProps = {
  authors: [],
}

AuthorList.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }),
  ),
}

export default AuthorList
