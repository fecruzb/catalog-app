import React, { useEffect, useState } from "react"

import { Avatar } from "@mui/material"

const Photo = ({ slug, styles, sx }) => {
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStyleIndex((prevIndex) => (prevIndex + 1) % styles.length)
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [styles])

  const currentStyle = styles[currentStyleIndex]

  return <Avatar sx={sx} src={`http://localhost:4000/public/author/${currentStyle}/${slug}.png`} />
}

Photo.defaultProps = {
  styles: ["default", "line"],
}

export default Photo
