import React from "react"
import { Link } from "react-router-dom"

import { Box, Breadcrumbs, Typography } from "@mui/material"

import * as api from "../api"
import List from "../component/List"

const BookListing = () => {
  const [books, setBooks] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await api.list()
      setBooks(result.data)
    }
    fetchData()
  }, [setBooks])

  return (
    <Box>
      <Breadcrumbs mb={2} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" to="/">
          <Typography>Home</Typography>
        </Link>
        <Typography color="text.primary">Books ({books.length})</Typography>
      </Breadcrumbs>

      <List books={books} />
    </Box>
  )
}

export default BookListing
