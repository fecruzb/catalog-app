import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { Box, Button } from "@mui/material"
import PersonAddIcon from "@mui/icons-material/PersonAdd"

import { Title } from "@/app/component"
import * as AuthorAPI from "@/author/api"
import { List } from "@/author/component"

const AuthorListing = () => {
  const navigate = useNavigate()
  const [authors, setAuthors] = useState([])

  const fetchData = async () => {
    const result = await AuthorAPI.list()
    setAuthors(result.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleEdit = async (author) => {
    navigate(`/author/${author.id}/edit`)
  }

  const handleView = async (author) => {
    navigate(`/author/${author.id}`)
  }

  const handleDelete = async (author) => {
    await AuthorAPI.remove(author.id)
    fetchData()
  }

  return (
    <Box>
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
      <List authors={authors} onDelete={handleDelete} onEdit={handleEdit} onView={handleView} />
    </Box>
  )
}

export default AuthorListing
