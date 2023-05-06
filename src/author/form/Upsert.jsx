import React from "react"
import PropTypes from "prop-types"

import * as yup from "yup"
import { Field, Form, Formik } from "formik"

import { Autocomplete, Box, Button, Grid, Stack, TextField } from "@mui/material"

import countryData from "country-list"

import { Flag } from "../component"

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  country: yup.string().required("Country is required"),
})

const countries = countryData.getData().map((country) => ({
  code: country.code,
  label: country.name,
}))

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
            <Field name="country">
              {({ field }) => (
                <Autocomplete
                  value={countries.find((o) => o.code === field.value)}
                  onChange={(event, value) =>
                    field.onChange({ target: { name: "country", value: value.code } })
                  }
                  options={countries}
                  autoHighlight
                  getOptionLabel={(option) => option.label}
                  renderOption={(props, option) => (
                    <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
                      <Flag code={option.code} />
                      {option.label} ({option.code})
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Country"
                      fullWidth
                      error={touched.country && !!errors.country}
                      helperText={touched.country && errors.country}
                    />
                  )}
                />
              )}
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
