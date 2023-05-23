import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { Box, Button, Stack, Typography } from "@mui/material"

import { Link, Loading, NotFound, Title } from "@/app/component"
import * as BookAPI from "@/book/api"
import { Card } from "@/book/component"

const BookView = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchBook = async (book_id) => {
    try {
      const response = await BookAPI.read(book_id)
      setBook(response.data)
    } catch (error) {
      setBook(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchBook(id)
  }, [id])

  const handleEdit = () => navigate(`/book/${book.id}/edit`)

  return (
    <Box>
      {loading ? (
        <Loading />
      ) : book ? (
        <>
          <Title
            breadcrumb={
              <Link to="/book">
                <Typography>Book</Typography>
              </Link>
            }
            action={
              <Stack direction="row" spacing={1}>
                <Button onClick={handleEdit} variant="outlined" color="warning">
                  Edit
                </Button>
              </Stack>
            }
          >
            {book.title}
          </Title>
          <Card book={book} />
          <Box mt={2} mb={2}>
            <Typography>{book.description}</Typography>
          </Box>
        </>
      ) : (
        <NotFound>Book was not found.</NotFound>
      )}
    </Box>
  )
}

export default BookView
