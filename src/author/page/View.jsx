import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { Box, Button, Divider, Stack, Typography } from "@mui/material"

import { Link, Loading, NotFound, Title } from "@/app/component"
import * as AuthorAPI from "@/author/api"
import { Card } from "@/author/component"
import { List } from "@/book/component"

import Biography from "../component/Biography"

const AuthorView = () => {
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

  const handleEdit = () => navigate(`/author/${author.id}/edit`)

  const handleViewBook = async (book) => {
    navigate(`/book/${book.id}`)
  }

  return (
    <Box>
      {loading ? (
        <Loading />
      ) : author ? (
        <>
          <Title
            breadcrumb={
              <Link to="/author">
                <Typography>Authors</Typography>
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
            {author.name}
          </Title>
          <Card author={author} />
          <Typography variant="h6">Biography</Typography>
          <Divider sx={{ mb: 1 }} />
          <Box mt={1} mb={1}>
            <Typography>
              <Biography prompt={`short biography about ${author.name}`} />
            </Typography>
          </Box>
          {author?.books?.length > 0 && (
            <>
              <Typography variant="h6">Books</Typography>
              <Divider sx={{ mb: 1 }} />
              <List onView={handleViewBook} dense books={author?.books || []} actions={false} />
            </>
          )}
        </>
      ) : (
        <NotFound>Author was not found.</NotFound>
      )}
    </Box>
  )
}

export default AuthorView
