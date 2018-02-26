import React, { Component } from 'react';
import { connect } from 'react-redux';

import BroadbandCard from '../broadbandCard/BroadbandCard';
import { fetchBroadbandBundles } from '../../actions';

class ListBroadbandBundles extends Component {
  componentDidMount() {
    this.props.fetchBroadbandBundles();
  }
  
  render() {
    const { broadbands } = this.props;
    return (
      broadbands && broadbands.map((broadbandBundle, index) => (
        <BroadbandCard
          key={index.toString()}
          name={broadbandBundle.name}
          totalPrice={broadbandBundle.totalPrice}
        />
      ))
    );
  }
}

const mapStateToProps = ({ broadbands }) => ({ broadbands });

export default connect(mapStateToProps, { fetchBroadbandBundles })(ListBroadbandBundles);
