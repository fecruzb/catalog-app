import * as React from "react"
import { Link as RouterLink } from "react-router-dom"

import { ButtonBase, Typography } from "@mui/material"
import MenuBookIcon from "@mui/icons-material/MenuBook"

const Logo = ({ to = "/" }) => (
  <ButtonBase LinkComponent={RouterLink} to={to}>
    <MenuBookIcon sx={{ mr: 1 }} />
    <Typography
      variant="h6"
      sx={{
        mr: 2,
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".3rem",
        color: "inherit",
        textDecoration: "none",
      }}
    >
      Liblab
    </Typography>
  </ButtonBase>
)

export default Logo
