import React from "react"

import { Box, Typography } from "@mui/material"

import LoginForm from "../form/Login"

const LoginPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="primary.main"
      color="white"
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome
      </Typography>
      <Box p={4} width={340} bgcolor="white" borderRadius={8}>
        <LoginForm />
      </Box>
    </Box>
  )
}

export default LoginPage
