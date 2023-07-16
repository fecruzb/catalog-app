import React from "react"

import { Avatar } from "@mui/material"

const Cover = ({ slug, sx }) => (
  <Avatar variant="square" sx={sx} src={`${API_URL}/public/book/${slug}.png`} />
)

export default Cover
