import { Box, Breadcrumbs, Typography } from "@mui/material";
import React from "react";
import { Link, useParams } from 'react-router-dom';
import Card from '../component/Card'

import data from '../data';

const Authoriew = () => {
    const { id } = useParams();
    const [author, setAuthor] = React.useState(null)

    React.useEffect(() => {
        const fetchedAuthor = data.find(e => e.id === parseInt(id))
        setAuthor(fetchedAuthor)
    })


    return author ?
        <Box>

            <Breadcrumbs mb={2} aria-label="breadcrumb">
                <Link underline="hover" color="inherit" to="/">
                    <Typography>Home</Typography>
                </Link>
                <Link underline="hover" color="inherit" to="/author">
                    <Typography>Authors</Typography>
                </Link>
                <Typography color="text.primary">{author.name}</Typography>
            </Breadcrumbs>


            <Card author={author} />

        </Box> : "Not Found"

}

export default Authoriew