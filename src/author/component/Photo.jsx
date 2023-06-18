import React from "react"

import { Avatar } from "@mui/material"

const Photo = ({ slug, sx }) => (
  <Avatar variant="circular" sx={sx} src={`${API_URL}/public/author/${slug}.png`} />
)

export default Photo
