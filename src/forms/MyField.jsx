import React from "react"
import PropTypes from "prop-types"

import { Field } from "formik"

const MyField = (Component) => {
  const MyComponent = ({ name, ...props }) => (
    <Field name={name}>
      {({ field, form: { setFieldValue }, meta: { error, touched } }) => (
        <Component
          name={name}
          value={field.value}
          onChange={(value) => setFieldValue(name, value, true)}
          onBlur={field.onBlur}
          error={error}
          touched={touched}
          {...props}
        />
      )}
    </Field>
  )

  MyComponent.propTypes = {
    name: PropTypes.string.isRequired,
  }

  return MyComponent
}

export default MyField
