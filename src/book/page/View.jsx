import React from "react"
import { Link, useParams } from "react-router-dom"

import { Box, Breadcrumbs, Typography } from "@mui/material"

import * as api from "../api"
import Card from "../component/Card"

const BookView = () => {
  const { id } = useParams()
  const [book, setBook] = React.useState(null)

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await api.read(id)
      setBook(result.data)
    }
    fetchData()
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
