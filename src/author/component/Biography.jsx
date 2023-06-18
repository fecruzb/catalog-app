import React, { useEffect, useState } from "react"

import { Skeleton } from "@mui/material"

import * as API from "@/app/api"

const Biography = ({ prompt }) => {
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
      <Skeleton />
      <Skeleton />
      <Skeleton sx={{ width: "75%" }} />
    </>
  )
}

export default Biography
