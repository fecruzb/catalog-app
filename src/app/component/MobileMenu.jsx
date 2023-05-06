import * as React from "react"

import { IconButton, Menu, MenuItem, Typography } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

import Link from "./Link"

const MobileMenu = ({ links }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  return (
    <>
      <IconButton edge="start" size="large" onClick={handleOpenNavMenu} color="inherit">
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={!!anchorElNav}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {links.map((link) => (
          <MenuItem key={link.text} onClick={handleCloseNavMenu}>
            <Link to={link.to}>
              <Typography textAlign="center">{link.text}</Typography>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default MobileMenu
