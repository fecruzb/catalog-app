import React from "react"
import { useNavigate, useParams } from "react-router-dom"

import { Box, Button, Divider, Stack, Typography } from "@mui/material"

import { Fetcher } from "src/component"
import { Link, Title } from "src/module/internal/component"

import * as BookAPI from "@/book/api"
import { Card } from "@/book/component"

import CharacterList from "../component/ListCharacter"

const BookView = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const handleEdit = () => navigate(`/book/${id}/edit`)

  return (
    <Fetcher request={async () => await BookAPI.read(id)}>
      {({ data: book }) => (
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
            <Typography>
              <Typography>{book.resume}</Typography>
            </Typography>
          </Box>
          {book?.characters?.length > 0 && (
            <>
              <Typography variant="h6">Characters</Typography>
              <Divider sx={{ mb: 1 }} />
              <CharacterList characters={book.characters} />
            </>
          )}
        </>
      )}
    </Fetcher>
  )
}

export default BookView
