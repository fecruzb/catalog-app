import React from "react"
import { useNavigate, useParams } from "react-router-dom"

import { Typography } from "@mui/material"

import { Fetcher } from "src/component"
import { Link, Title } from "src/module/internal/component"

import * as BookAPI from "@/book/api"
import { Upsert } from "@/book/form"

const BookEdit = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const handleSubmit = async (value) => {
    const { data: book } = await BookAPI.update(value)
    navigate(`/book/${book.id}`)
    return book
  }

  const handleCancel = () => {
    navigate("/book")
  }

  return (
    <Fetcher request={async () => await BookAPI.read(id)}>
      {({ data: book }) => (
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
      )}
    </Fetcher>
  )
}

export default BookEdit
