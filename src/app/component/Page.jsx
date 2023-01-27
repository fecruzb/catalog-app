import React from 'react'

import { Box, Container } from "@mui/material"


const Page = ({ children }) => (
    <Box py={3}>
        <Container maxWidth={"100%"}>
            {children}
        </Container>
    </Box>
)

export default Page
