import React, { useEffect, useState } from "react"

import { Skeleton } from "@mui/material"

import * as API from "@/app/api"

const Resume = ({ prompt }) => {
  const [text, setText] = useState("")

  useEffect(() => {
    const fetch = async () => {
      const response = await API.prompt(prompt)
      setText(response.data)
    }
    fetch()
  }, [prompt])

  return text ? (
    <>{text}</>
  ) : (
    <>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </>
  )
}

export default Resume
