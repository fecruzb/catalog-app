import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import * as yup from "yup"
import { Field, Form, Formik } from "formik"

import { Button, Grid, MenuItem, Stack, TextField } from "@mui/material"

import * as AuthorAPI from "@/author/api"

const validationSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
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
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ errors, touched, isValid, isSubmitting, dirty }) => (
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field
                name="title"
                as={TextField}
                label="Title"
                fullWidth
                error={touched.title && !!errors.title}
                helperText={touched.title && errors.title}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="author_id"
                as={TextField}
                label="Author"
                fullWidth
                select
                error={touched.author_id && !!errors.author_id}
                helperText={touched.author_id && errors.author_id}
              >
                {authors.map((author) => (
                  <MenuItem key={author.id} value={author.id}>
                    {author.name}
                  </MenuItem>
                ))}
              </Field>
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" spacing={2} justifyContent="end">
                <Button variant="outlined" color="inherit" onClick={onCancel}>
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!isValid || isSubmitting || !dirty}
                >
                  Save
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
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
