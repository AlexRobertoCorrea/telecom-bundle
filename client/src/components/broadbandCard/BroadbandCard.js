import React, { Component } from 'react';
import Button from 'material-ui/Button';

class BroadbandCard extends Component {
  render() {
    return (
      <div>
        <p>{Array.isArray(this.props.name) ? this.props.name.join(' + ') : this.props.name}</p>
        <p>{this.props.totalPrice}</p>
        <Button variant="raised" color="primary">
          Comprar
        </Button>
      </div>
    );
  }
}

export default BroadbandCard;
