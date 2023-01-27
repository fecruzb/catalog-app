import React from "react"
import PropTypes from 'prop-types'
import Item from "./Item"
import { Divider, Grid } from "@mui/material";

const BookList = ({ books }) => (
    <Grid container spacing={2}>
        {books.map(book =>
            <Grid item key={book.id} xs={12}>
                <Item book={book} />
                <Divider />
            </Grid>
        )}
    </Grid>
)

BookList.defaultProps = {
    books: []
}

BookList.propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
    }))
}

export default BookList