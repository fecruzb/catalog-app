import React from "react"
import { useNavigate, useParams } from "react-router-dom"

import { Box, Button, Divider, Stack, Typography } from "@mui/material"

import { Fetcher } from "src/component"
import { Link, Title } from "src/module/internal/component"

import * as AuthorAPI from "@/author/api"
import { Card } from "@/author/component"
import { List } from "@/book/component"

const AuthorView = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const handleEdit = () => navigate(`/author/${id}/edit`)

  const handleViewBook = async (book) => {
    navigate(`/book/${book.id}`)
  }

  return (
    <Fetcher request={async () => await AuthorAPI.read(id)}>
      {({ data: author }) => (
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
            <Typography>{author.biography}</Typography>
          </Box>
          {author?.books?.length > 0 && (
            <>
              <Typography variant="h6">Books</Typography>
              <Divider sx={{ mb: 1 }} />
              <List onView={handleViewBook} books={author?.books || []} actions={false} />
            </>
          )}
        </>
      )}
    </Fetcher>
  )
}

export default AuthorView
