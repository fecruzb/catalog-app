import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { Box, Button } from "@mui/material"
import PersonAddIcon from "@mui/icons-material/PersonAdd"

import { Fetcher } from "src/component"
import { Title } from "src/module/internal/component"

import * as AuthorAPI from "@/author/api"
import { List } from "@/author/component"

import { Delete } from "../modal"

const AuthorListing = () => {
  const navigate = useNavigate()
  const [authorToDelete, setAuthorToDelete] = useState(false)

  const deleteData = async (author) => {
    await AuthorAPI.remove(author.id)
    handleCloseModal()
  }

  const handleEdit = async (author) => {
    navigate(`/author/${author.id}/edit`)
  }

  const handleView = async (author) => {
    navigate(`/author/${author.id}`)
  }

  const handleOpenModal = (author) => {
    setAuthorToDelete(author)
  }

  const handleCloseModal = () => {
    setAuthorToDelete(false)
  }

  return (
    <Fetcher request={AuthorAPI.list}>
      {({ data: authors }) => (
        <Box>
          {authorToDelete && (
            <Delete
              open
              author={authorToDelete}
              onClose={handleCloseModal}
              onConfirm={deleteData}
            />
          )}
          <Title
            action={
              <Button
                sx={{ fontWeight: "bold", textTransform: "none" }}
                onClick={() => navigate("/author/new")}
                variant="contained"
                color="primary"
              >
                <PersonAddIcon sx={{ mr: 1 }} />
                New Author
              </Button>
            }
          >
            Author
          </Title>
          <List
            authors={authors}
            onDelete={handleOpenModal}
            onEdit={handleEdit}
            onView={handleView}
          />
        </Box>
      )}
    </Fetcher>
  )
}

export default AuthorListing
