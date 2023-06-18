import React from "react"

import { Avatar } from "@mui/material"

const Cover = ({ slug, sx }) => (
  <Avatar variant="square" sx={sx} src={`http://localhost:4000/public/book/${slug}.png`} />
)

export default Cover
