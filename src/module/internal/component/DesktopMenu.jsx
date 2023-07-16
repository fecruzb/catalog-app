import * as React from "react"
import { Link as RouterLink } from "react-router-dom"

import { Button } from "@mui/material"

const DesktopMenu = ({ links }) => (
  <>
    {links.map((link) => (
      <Button
        LinkComponent={RouterLink}
        key={link.text}
        to={link.to}
        sx={{ my: 2, color: "white", display: "block" }}
      >
        {link.text}
      </Button>
    ))}
  </>
)

export default DesktopMenu
