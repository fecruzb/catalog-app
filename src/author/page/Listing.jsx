import React from "react"
import { Link } from "react-router-dom"

import { Box, Breadcrumbs, Typography } from "@mui/material"

import * as api from "../api"
import List from "../component/List"

const AuthorListing = () => {
  const [authors, setAuthors] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await api.list()
      setAuthors(result.data)
    }
    fetchData()
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
