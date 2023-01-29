import React from "react"
import { Link, useParams } from "react-router-dom"

import { Box, Breadcrumbs, Typography } from "@mui/material"

import * as api from "../api"
import Card from "../component/Card"

const Authoriew = () => {
  const { id } = useParams()
  const [author, setAuthor] = React.useState(null)

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await api.read(id)
      setAuthor(result.data)
    }
    fetchData()
  }, [setAuthor, id])

  return author ? (
    <Box>
      <Breadcrumbs mb={2} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" to="/">
          <Typography>Home</Typography>
        </Link>
        <Link underline="hover" color="inherit" to="/author">
          <Typography>Authors</Typography>
        </Link>
        <Typography color="text.primary">{author.name}</Typography>
      </Breadcrumbs>

      <Card author={author} />
    </Box>
  ) : (
    "Not Found"
  )
}

export default Authoriew
