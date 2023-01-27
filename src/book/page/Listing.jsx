import React from "react"
import { Link } from "react-router-dom"

import { Box, Breadcrumbs, Typography } from "@mui/material"

import List from "../component/List"
import data from "../data"

const BookListing = () => {
  const [books, setBooks] = React.useState([])

  React.useEffect(() => {
    setBooks(data)
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
