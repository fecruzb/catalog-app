import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { Box, Button } from "@mui/material"
import NoteAddIcon from "@mui/icons-material/NoteAdd"

import { Title } from "@/app/component"
import * as BookAPI from "@/book/api"
import { List } from "@/book/component"

import { Delete } from "../modal"

const BookListing = () => {
  const navigate = useNavigate()
  const [books, setBooks] = useState([])
  const [bookToDelete, setBookToDelete] = useState(false)

  const fetchData = async () => {
    const result = await BookAPI.list()
    setBooks(result.data)
  }

  const deleteData = async (book) => {
    await BookAPI.remove(book.id)
    await fetchData()
    handleCloseModal()
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

  const handleOpenModal = (book) => {
    setBookToDelete(book)
  }

  const handleCloseModal = () => {
    setBookToDelete(false)
  }

  return (
    <Box>
      {bookToDelete && (
        <Delete open book={bookToDelete} onClose={handleCloseModal} onConfirm={deleteData} />
      )}
      <Title
        action={
          <Button
            sx={{ fontWeight: "bold", textTransform: "none" }}
            onClick={() => navigate("/book/new")}
            variant="contained"
            color="primary"
          >
            <NoteAddIcon sx={{ mr: 1 }} />
            New Book
          </Button>
        }
      >
        Book
      </Title>
      <List books={books} onDelete={handleOpenModal} onEdit={handleEdit} onView={handleView} />
    </Box>
  )
}

export default BookListing
