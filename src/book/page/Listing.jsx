import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { Box, Button } from "@mui/material"

import { Title } from "@/app/component"
import * as BookAPI from "@/book/api"
import { List } from "@/book/component"

const BookListing = () => {
  const navigate = useNavigate()
  const [books, setBooks] = useState([])

  const fetchData = async () => {
    const result = await BookAPI.list()
    setBooks(result.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleEdit = async (book) => {
    navigate(`/book/${book.id}/edit`)
  }

  const handleView = async (book) => {
    navigate(`/book/${book.id}`)
  }

  const handleDelete = async (book) => {
    await BookAPI.remove(book.id)
    fetchData()
  }

  return (
    <Box>
      <Title
        action={
          <Button onClick={() => navigate("/book/new")} variant="contained">
            New
          </Button>
        }
      >
        Book
      </Title>
      <List books={books} onDelete={handleDelete} onEdit={handleEdit} onView={handleView} />
    </Box>
  )
}

export default BookListing
