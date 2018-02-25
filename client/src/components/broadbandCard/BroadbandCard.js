import React, { Component } from 'react';
import Button from 'material-ui/Button';

class BroadbandCard extends Component {
  render() {
    return (
      <div>
        <h3>Bundle</h3>
        <p>{Array.isArray(this.props.name) ? this.props.name.join(' + ') : this.props.name}</p>
        <h3>Preço</h3>
        <p>R$ {this.props.totalPrice},00</p>
        <Button variant="raised" color="primary">
          Comprar
        </Button>
      </div>
    );
  }
}

export default BroadbandCard;
