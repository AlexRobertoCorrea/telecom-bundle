import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BroadbandCard from '../broadbandCard/BroadbandCard';
import fetchBroadbandBundles from '../../actions';

class ListBroadbandBundles extends Component {
  componentDidMount() {
    this.props.fetchBroadbandBundles();
  }
  
  render() {
    const { broadbands } = this.props;
    return (
      broadbands && broadbands.map((broadbandBundle, index) => (
        <BroadbandCard
          className="broadband-card-list"
          key={index.toString()}
          name={broadbandBundle.name}
          totalPrice={broadbandBundle.totalPrice}
        />
      ))
    );
  }
}

const mapStateToProps = ({ broadbands }) => ({ broadbands });

ListBroadbandBundles.propTypes = {
  broadbands: PropTypes.arrayOf(PropTypes.object),
  fetchBroadbandBundles: PropTypes.func
};

ListBroadbandBundles.defaultProps = {
  broadbands: [],
  fetchBroadbandBundles: undefined
};

export default connect(mapStateToProps, { fetchBroadbandBundles })(ListBroadbandBundles);
