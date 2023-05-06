import React from "react"
import { useNavigate } from "react-router-dom"

import { Box, Typography } from "@mui/material"

import { Link, Title } from "@/app/component"
import * as BookAPI from "@/book/api"
import { Upsert } from "@/book/form"

const BookCreate = () => {
  const navigate = useNavigate()

  const handleSubmit = async (value) => {
    const { data: book } = await BookAPI.create(value)
    navigate(`/book/${book.id}`)
    return book
  }

  const handleCancel = () => {
    navigate("/book")
  }

  return (
    <Box>
      <Title
        breadcrumb={
          <Link to="/book">
            <Typography>Book</Typography>
          </Link>
        }
      >
        New
      </Title>
      <Upsert onSubmit={handleSubmit} onCancel={handleCancel} />
    </Box>
  )
}

export default BookCreate
