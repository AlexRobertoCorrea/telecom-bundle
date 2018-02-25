import React, { Component } from 'react';
import Button from 'material-ui/Button';

class BroadbandCard extends Component {
  render() {
    return (
      <div>
        <h3>Bundle</h3>
        <p>{Array.isArray(this.props.name) ? this.props.name.join(' + ') : this.props.name}</p>
        <h3>Price</h3>
        <p>$ {this.props.totalPrice}.00</p>
        <Button variant="raised" color="primary">
          Buy
        </Button>
      </div>
    );
  }
}

export default BroadbandCard;
