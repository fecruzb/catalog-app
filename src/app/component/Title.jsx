import React from "react"
import PropTypes from "prop-types"

import { Box, Breadcrumbs, Divider, Grid, Typography } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"

import Link from "./Link"

const Title = ({ children, action, breadcrumb }) => (
  <Box mb={1}>
    <Grid container spacing={2} alignItems="flex-end" mb={1} height="54px">
      <Grid item xs>
        <Breadcrumbs separator="›">
          <Link to="/">
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Home
            </Typography>
          </Link>
          {breadcrumb}
          <Typography color="text.primary">{children}</Typography>
        </Breadcrumbs>
      </Grid>
      {action && <Grid item>{action}</Grid>}
    </Grid>
    <Divider />
  </Box>
)

Title.defaultProps = {
  breadcrumb: undefined,
  action: undefined,
}

Title.propTypes = {
  action: PropTypes.node,
  breadcrumb: PropTypes.node,
  children: PropTypes.node.isRequired,
}

export default Title
