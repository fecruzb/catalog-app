import React from "react"
import { useNavigate } from "react-router-dom"

import { Box, Typography } from "@mui/material"

import { Link, Title } from "@/app/component"
import * as AuthorAPI from "@/author/api"
import { Upsert } from "@/author/form"

const AuthorCreate = () => {
  const navigate = useNavigate()

  const handleSubmit = async (value) => {
    const { data: author } = await AuthorAPI.create(value)
    navigate(`/author/${author.id}`)
    return author
  }

  const handleCancel = () => {
    navigate("/author")
  }

  return (
    <Box>
      <Title
        breadcrumb={
          <Link to="/author">
            <Typography>Authors</Typography>
          </Link>
        }
      >
        New
      </Title>
      <Upsert onSubmit={handleSubmit} onCancel={handleCancel} />
    </Box>
  )
}

export default AuthorCreate
