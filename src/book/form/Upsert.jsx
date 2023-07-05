import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import * as yup from "yup"

import { Button, Grid, Stack } from "@mui/material"

import { MyAutoComplete, MyForm, MySubmit, MyTextField } from "src/forms"

import * as AuthorAPI from "@/author/api"
import Photo from "@/author/component/Photo"

const validationSchema = yup.object().shape({
  title: yup.string().min(5).required("Title is required"),
  author_id: yup.number().required("Author is required"),
})

const UpsertBookForm = ({ initialValues, onSubmit, onCancel }) => {
  const [authors, setAuthors] = useState([])

  const fetchData = async () => {
    const result = await AuthorAPI.list()
    setAuthors(result.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <MyForm initialValues={initialValues} validation={validationSchema} onSubmit={onSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <MyTextField name="title" label="Title" />
        </Grid>
        <Grid item xs={12}>
          <MyAutoComplete
            icon={({ option }) => <Photo slug={option.slug} sx={{ mr: 1 }} />}
            name="author_id"
            valueAccessor="id"
            labelAccessor="name"
            options={authors}
            label="Author"
          />
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} justifyContent="end">
            <Button variant="outlined" color="inherit" onClick={onCancel}>
              Back
            </Button>
            <MySubmit type="submit" variant="contained" color="primary" />
          </Stack>
        </Grid>
      </Grid>
    </MyForm>
  )
}

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
