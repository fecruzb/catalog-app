import React from "react"
import PropTypes from "prop-types"

import * as yup from "yup"

import { Button, Grid, Stack } from "@mui/material"

import countryData from "country-list"
import { AutoComplete, Form, SubmitButton, TextField } from "src/component"

import { Flag } from "../component"

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  country: yup.string(),
})

const countries = countryData.getData().map((country) => ({
  value: country.code,
  label: country.name,
}))

const UpsertAuthorForm = ({ initialValues, onSubmit, onCancel }) => {
  return (
    <Form validation={validationSchema} onSubmit={onSubmit} initialValues={initialValues}>
      <Stack direction="column" spacing={2}>
        <TextField name="name" label="Name" />
        {initialValues?.id && (
          <>
            <AutoComplete
              icon={({ option }) => <Flag code={option.value} />}
              name="country"
              options={countries}
              label="Country"
            />
            <TextField name="biography" label="Biography" multiline minRows={5} />
          </>
        )}
        <Stack direction="row" spacing={2} justifyContent="end">
          <Button variant="outlined" color="inherit" onClick={onCancel}>
            Back
          </Button>
          <SubmitButton type="submit" variant="contained" color="primary" />
        </Stack>
      </Stack>
    </Form>
  )
}

UpsertAuthorForm.defaultProps = {
  initialValues: {
    name: "",
    country: "",
  },
}

UpsertAuthorForm.propTypes = {
  initialValues: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    country: PropTypes.string,
  }),
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default UpsertAuthorForm
