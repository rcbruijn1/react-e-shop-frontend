import React from 'react';
import PropTypes from 'prop-types';

//Core
import { Box, Typography, DialogContent, Grid } from '@material-ui/core';

const ItemCardZoomed = ({ shopItem }) => (
  <DialogContent>
    <Grid container>
      <Grid item xs={8}>
        <img src={shopItem.image} width={300} height="auto" alt="img" />
      </Grid>
      <Grid item xs={4}>
        <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
          <div>
            <Typography variant="h6" paragraph>
                {shopItem.title}
            </Typography>
            <Typography variant="body2" gutterBottom>
                {shopItem.description}
            </Typography>
          </div>
          <Typography>
              <b>{`$${shopItem.price}`}</b>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </DialogContent>
);

ItemCardZoomed.propTypes = {
    shopItem: PropTypes.object.isRequired,
};

export default ItemCardZoomed;