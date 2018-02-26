import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

const BroadbandCard = props => (
  <div>
    <h3>Bundle</h3>
    <p>{props.name}</p>
    <h3>Price</h3>
    <p>$ {props.totalPrice.toFixed(2)}</p>
    <Button variant="raised" color="primary">
      Buy
    </Button>
  </div>
);

BroadbandCard.propTypes = {
  name: PropTypes.string.isRequired,
  totalPrice: PropTypes.number.isRequired
};

export default BroadbandCard;
