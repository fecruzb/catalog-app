import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { Box, Typography } from "@mui/material"

import { Link, Loading, NotFound, Title } from "@/app/component"
import * as AuthorAPI from "@/author/api"
import { Upsert } from "@/author/form"

const AuthorEdit = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [author, setAuthor] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchAuthor = async (author_id) => {
    try {
      const response = await AuthorAPI.read(author_id)
      setAuthor(response.data)
    } catch (error) {
      setAuthor(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAuthor(id)
  }, [id])

  const handleSubmit = async (value) => {
    const { data: author } = await AuthorAPI.update(value)
    navigate(`/author`)
    return author
  }

  const handleCancel = () => {
    navigate("/author")
  }

  return (
    <Box>
      {loading ? (
        <Loading />
      ) : author ? (
        <>
          <Title
            breadcrumb={[
              <Link to="/author" key="1">
                <Typography>Authors</Typography>
              </Link>,
              <Link to={`/author/${author.id}`} key="2">
                <Typography>{author.name}</Typography>
              </Link>,
            ]}
          >
            Edit
          </Title>
          <Upsert initialValues={author} onSubmit={handleSubmit} onCancel={handleCancel} />
        </>
      ) : (
        <NotFound>Author was not found.</NotFound>
      )}
    </Box>
  )
}

export default AuthorEdit
