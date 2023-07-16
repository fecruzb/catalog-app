import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import { Typography } from "@mui/material"

/**
 * Context object for providing data, loading state, and error information.
 */

/**
 * Fetched component for handling asynchronous data fetching.
 */
const Fetcher = ({ children, request }) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  /**
   * Asynchronous function for fetching data.
   * Sets the loading state, performs the request, and updates the data state accordingly.
   */
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const result = await request()
        setData(result.data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [request])

  if (loading) {
    return <>Loading</>
  }

  if (error) {
    if (error?.response?.status === 404) {
      return <>Not Found</>
    }
    return <Typography>Error: {error.message}</Typography>
  }

  if (!data) {
    return React.Fragment
  }

  return typeof children === "function" ? children({ data, loading, error }) : children
}

Fetcher.defaultProps = {
  notFound: "Not Found",
}

Fetcher.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  request: PropTypes.func.isRequired,
}

export default Fetcher
