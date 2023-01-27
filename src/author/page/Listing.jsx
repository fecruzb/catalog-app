import React from "react"
import { Link } from "react-router-dom"

import { Box, Breadcrumbs, Typography } from "@mui/material"

import List from "../component/List"
import data from "../data"

const AuthorListing = () => {
  const [authors, setAuthors] = React.useState([])

  React.useEffect(() => {
    setAuthors(data)
  }, [setAuthors])

  return (
    <Box>
      <Breadcrumbs mb={2} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" to="/">
          <Typography>Home</Typography>
        </Link>
        <Typography color="text.primary">Authors ({authors.length}) </Typography>
      </Breadcrumbs>

      <List authors={authors} />
    </Box>
  )
}

export default AuthorListing
