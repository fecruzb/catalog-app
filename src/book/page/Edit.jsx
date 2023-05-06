import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { Box, Typography } from "@mui/material"

import { Link, Loading, NotFound, Title } from "@/app/component"
import * as BookAPI from "@/book/api"
import { Upsert } from "@/book/form"

const BookEdit = () => {
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

  const handleSubmit = async (value) => {
    const { data: book } = await BookAPI.update(value)
    navigate(`/book`)
    return book
  }

  const handleCancel = () => {
    navigate("/book")
  }

  return (
    <Box>
      {loading ? (
        <Loading />
      ) : book ? (
        <>
          <Title
            breadcrumb={[
              <Link to="/book" key="1">
                <Typography>Book</Typography>
              </Link>,
              <Link to={`/book/${book.id}`} key="2">
                <Typography>{book.title}</Typography>
              </Link>,
            ]}
          >
            Edit
          </Title>
          <Upsert initialValues={book} onSubmit={handleSubmit} onCancel={handleCancel} />
        </>
      ) : (
        <NotFound>Book was not found.</NotFound>
      )}
    </Box>
  )
}

export default BookEdit
