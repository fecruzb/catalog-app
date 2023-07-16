import * as React from "react"

import { AppBar, Grid, Toolbar } from "@mui/material"

import Container from "./Container"
import DesktopMenu from "./DesktopMenu"
import Logo from "./Logo"
import MobileMenu from "./MobileMenu"
import UserMenu from "./UserMenu"

const pages = [
  { text: "Authors", to: "/author" },
  { text: "Books", to: "/book" },
]

const ResponsiveAppBar = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Grid container alignItems="center">
            {/* Desktop Logo */}
            <Grid item xs={false} sx={{ display: { xs: "none", md: "flex" } }}>
              <Logo to="/" />
            </Grid>

            {/* Mobile Menu */}
            <Grid item sx={{ display: { xs: "flex", md: "none" } }}>
              <MobileMenu links={pages} />
            </Grid>

            {/* Mobile Logo */}
            <Grid xs item justifyContent="center" sx={{ display: { xs: "flex", md: "none" } }}>
              <Logo to="/" />
            </Grid>

            {/* Desktop Menu */}
            <Grid xs item sx={{ display: { xs: "none", md: "flex" } }}>
              <DesktopMenu links={pages} />
            </Grid>

            <Grid item>
              <UserMenu />
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
