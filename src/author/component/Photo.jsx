import React, { useEffect, useState } from "react"

import { Avatar } from "@mui/material"

const Photo = ({ slug, styles, sx }) => {
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStyleIndex((prevIndex) => (prevIndex + 1) % styles.length)
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [styles])

  const currentStyle = styles[currentStyleIndex]

  return <Avatar sx={sx} src={`${API_URL}/public/author/${currentStyle}/${slug}.png`} />
}

Photo.defaultProps = {
  styles: ["default", "realistic", "anime"],
}

export default Photo
