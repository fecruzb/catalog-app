import React from "react"
import PropTypes from "prop-types"

import { Form, Formik } from "formik"

const MyForm = ({ children, initialValues, validation, onSubmit }) => (
  <Formik initialValues={initialValues} validationSchema={validation} onSubmit={onSubmit}>
    <Form>{children}</Form>
  </Formik>
)

MyForm.propTypes = {
  children: PropTypes.func.isRequired,
  initialValues: PropTypes.shape().isRequired,
  onSubmit: PropTypes.func.isRequired,
  validation: PropTypes.shape().isRequired,
}

export default MyForm
