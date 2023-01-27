import React from "react"
import { Link, useParams } from "react-router-dom"

import { Box, Breadcrumbs, Typography } from "@mui/material"

import Card from "../component/Card"
import data from "../data"

const BookView = () => {
  const { id } = useParams()
  const [book, setBook] = React.useState(null)

  React.useEffect(() => {
    const fetchedBook = data.find((e) => e.id === parseInt(id))
    setBook(fetchedBook)
  }, [setBook, id])

  return book ? (
    <Box>
      <Breadcrumbs mb={2} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" to="/">
          <Typography>Home</Typography>
        </Link>
        <Link underline="hover" color="inherit" to="/book">
          <Typography>Books</Typography>
        </Link>
        <Typography color="text.primary">{book.title}</Typography>
      </Breadcrumbs>

      <Card book={book} />
    </Box>
  ) : (
    "Not Found"
  )
}

export default BookView
