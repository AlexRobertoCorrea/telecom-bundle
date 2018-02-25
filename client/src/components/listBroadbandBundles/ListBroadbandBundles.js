import React, { Component } from 'react';
import { connect } from 'react-redux';

import BroadbandCard from '../broadbandCard/BroadbandCard';
import { fetchBroadbandBundles } from '../../actions';

class ListBroadbandBundles extends Component {
  componentDidMount() {
    this.props.fetchBroadbandBundles();
  }
  
  renderBroadbandBundles() {
    if (this.props.broadbands) {
      return this.props.broadbands.map(broadbandBundle => (
        <BroadbandCard
          name={broadbandBundle.name}
          totalPrice={broadbandBundle.totalPrice}
        />
        )
      );
    }
  }
  
  render() {
    return (
      <div>
        {this.renderBroadbandBundles()}
      </div>
    );
  }
}

function mapStateToProps({ broadbands }) {
  return { broadbands };
}

export default connect(mapStateToProps, { fetchBroadbandBundles })(ListBroadbandBundles);
