import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import { Box, Button } from "@mui/material"
import NoteAddIcon from "@mui/icons-material/NoteAdd"

import { Fetcher } from "src/component"
import { Title } from "src/module/internal/component"

import * as BookAPI from "@/book/api"
import { List } from "@/book/component"

import { Delete } from "../modal"

const BookListing = () => {
  const navigate = useNavigate()
  const [bookToDelete, setBookToDelete] = useState(false)

  const deleteData = async (book) => {
    await BookAPI.remove(book.id)
    handleCloseModal()
  }

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
    <Fetcher request={BookAPI.list}>
      {({ data: books }) => (
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
      )}
    </Fetcher>
  )
}

export default BookListing
