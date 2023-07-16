import React from "react"
import PropTypes from "prop-types"

import * as yup from "yup"

import { Grid, Stack } from "@mui/material"

import { Form, SubmitButton, TextField } from "src/component"

import * as api from "../api"
import { useAuth } from "../context/UserStore"

const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
})

const LoginForm = ({ initialValues }) => {
  const { login } = useAuth()
  const onSubmit = async (values) => {
    const { email, password } = values

    const response = await api.login(email, password)
    const token = response.data

    if (token) {
      login(token)
      return token
    } else {
      throw new Error("Invalid email or password")
    }
  }

  return (
    <Form validation={validationSchema} onSubmit={onSubmit} initialValues={initialValues}>
      <Stack direction="column" spacing={2}>
        <TextField name="email" label="Email" />
        <TextField name="password" label="Password" type="password" />
        <SubmitButton type="submit" variant="contained" color="primary" fullWidth>
          Log In
        </SubmitButton>
      </Stack>
    </Form>
  )
}

LoginForm.propTypes = {
  initialValues: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
}

LoginForm.defaultProps = {
  initialValues: { email: "", password: "" },
}

export default LoginForm
