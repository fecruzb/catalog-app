import React from 'react'
import { Link } from "react-router-dom"

import { AppBar, Box, Grid, Toolbar, Typography } from "@mui/material"

const Menu = () => (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <Link to="/"><Typography variant="h6">Catalog-App</Typography></Link>
            </Toolbar>
        </AppBar>
    </Box>
)

export default Menu
