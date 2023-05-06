import React from "react"
import PropTypes from "prop-types"

import * as yup from "yup"
import { Field, Form, Formik } from "formik"

import { Button, Grid, MenuItem, Stack, TextField } from "@mui/material"

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  country: yup.string().required("Country is required"),
})

const countries = [
  { id: 1, name: "Country 1" },
  { id: 2, name: "Country 2" },
  { id: 3, name: "Country 3" },
]

const UpsertAuthorForm = ({ initialValues, onSubmit, onCancel }) => (
  <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
    {({ errors, touched, isValid, isSubmitting, dirty }) => (
      <Form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Field
              name="name"
              as={TextField}
              label="Name"
              fullWidth
              error={touched.name && !!errors.name}
              helperText={touched.name && errors.name}
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              name="country"
              as={TextField}
              label="Country"
              fullWidth
              select
              error={touched.country && !!errors.country}
              helperText={touched.country && errors.country}
            >
              {countries.map((country) => (
                <MenuItem key={country.id} value={country.name}>
                  {country.name}
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

UpsertAuthorForm.defaultProps = {
  initialValues: {
    name: "",
    country: "",
  },
}

UpsertAuthorForm.propTypes = {
  initialValues: PropTypes.shape({
    name: PropTypes.string,
    country: PropTypes.string,
  }),
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default UpsertAuthorForm
