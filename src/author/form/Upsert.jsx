import React from "react"
import PropTypes from "prop-types"

import * as yup from "yup"

import { Button, Grid, Stack } from "@mui/material"

import countryData from "country-list"
import { MyAutoComplete, MyForm, MySubmit, MyTextField } from "src/forms"

import { Flag } from "../component"

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  country: yup.string().required("Country is required"),
})

const countries = countryData.getData().map((country) => ({
  value: country.code,
  label: country.name,
}))

const UpsertAuthorForm = ({ initialValues, onSubmit, onCancel }) => {
  return (
    <MyForm validation={validationSchema} onSubmit={onSubmit} initialValues={initialValues}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <MyTextField name="name" label="Name" />
        </Grid>
        <Grid item xs={12}>
          <MyAutoComplete
            icon={({ option }) => <Flag code={option.value} />}
            name="country"
            options={countries}
            label="Country"
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
