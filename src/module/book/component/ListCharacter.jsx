import React from "react"
import PropTypes from "prop-types"

import { Avatar, Box, Grid, Typography } from "@mui/material"

const CharacterList = ({ characters }) => (
  <Grid container spacing={2}>
    {characters.map((character) => (
      <Grid item key={character.id} xs={4}>
        <Box display="flex" alignItems="center">
          <Avatar
            title={character.photo_description}
            src={`${API_URL}/public/character/${character.slug}.png`}
            sx={{ width: 92, height: 92 }}
          />
          <Box ml={2}>
            <Typography variant="h5" component="div">
              {character.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {character.role}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {character.description}
            </Typography>
          </Box>
        </Box>
      </Grid>
    ))}
  </Grid>
)

CharacterList.defaultProps = {
  characters: [],
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      description: PropTypes.string,
    }),
  ),
}

export default CharacterList
