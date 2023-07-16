import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import * as yup from "yup"

import { Button, Grid, Stack } from "@mui/material"

import { AutoComplete, Fetcher, Form, SubmitButton, TextField } from "src/component"

import * as AuthorAPI from "@/author/api"
import Photo from "@/author/component/Photo"

const validationSchema = yup.object().shape({
  title: yup.string().min(5).required("Title is required"),
  author_id: yup.number().required("Author is required"),
})

const UpsertBookForm = ({ initialValues, onSubmit, onCancel }) => (
  <Fetcher request={AuthorAPI.list}>
    {({ data: authors }) => (
      <Form initialValues={initialValues} validation={validationSchema} onSubmit={onSubmit}>
        <Stack direction="column" spacing={2}>
          <TextField name="title" label="Title" />
          <AutoComplete
            icon={({ option }) => <Photo slug={option.slug} sx={{ mr: 1 }} />}
            name="author_id"
            valueAccessor="id"
            labelAccessor="name"
            options={authors}
            label="Author"
          />
          <Stack direction="row" spacing={2} justifyContent="end">
            <Button variant="outlined" color="inherit" onClick={onCancel}>
              Back
            </Button>
            <SubmitButton type="submit" variant="contained" color="primary" />
          </Stack>
        </Stack>
      </Form>
    )}
  </Fetcher>
)

UpsertBookForm.defaultProps = {
  initialValues: {
    title: "",
    author: undefined,
  },
}

UpsertBookForm.propTypes = {
  initialValues: PropTypes.shape({
    title: PropTypes.string,
    author_id: PropTypes.number,
  }),
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default UpsertBookForm
