import React, { useState } from "react"

import { Avatar, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material"

import { useAuth } from "@/auth/context/UserStore"

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const { logout, user } = useAuth()

  const handleOpenUserMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Felipe Cruz" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={!!anchorEl}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={logout}>
          <Typography textAlign="center">Logout ({user.name})</Typography>
        </MenuItem>
      </Menu>
    </>
  )
}

export default UserMenu
