import React from "react"

const Flag = ({ code, width = 20 }) => (
  <img
    loading="lazy"
    width={width}
    src={`https://flagcdn.com/w20/${code.toLowerCase()}.png`}
    srcSet={`https://flagcdn.com/w40/${code.toLowerCase()}.png 2x`}
    alt=""
  />
)

export default Flag
