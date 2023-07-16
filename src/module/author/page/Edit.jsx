import React from "react"
import { useNavigate, useParams } from "react-router-dom"

import { Typography } from "@mui/material"

import { Fetcher } from "src/component"
import { Link, Title } from "src/module/internal/component"

import * as AuthorAPI from "@/author/api"
import { Upsert } from "@/author/form"

const AuthorEdit = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const handleSubmit = async (value) => {
    const { data: author } = await AuthorAPI.update(value)
    navigate(`/author/${author.id}`)
    return author
  }

  const handleCancel = () => {
    navigate("/author")
  }

  return (
    <Fetcher request={async () => await AuthorAPI.read(id)}>
      {({ data: author }) => (
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
      )}
    </Fetcher>
  )
}

export default AuthorEdit
