import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchTransport } from './transport/actions';

class App extends Component {
  render() {
    const {
      fetchTransport,
      isLoading,
      error,
      transport,
    } = this.props;

    const removeDupes = (val, idx, arr) => arr.indexOf(val) === idx;

    const availableTransport = [...transport]
      .filter((vehicle) => vehicle.type === 'car')
      .filter((vehicle) => vehicle.colors.indexOf('red') !== -1);
      

    // Move to store
    const colors = availableTransport
      .map((vehicle) => vehicle.colors)
      .reduce((a, b) => a.concat(b), [])
      .filter(removeDupes);
    
    // Move to store
    const brands = availableTransport
      .map((vehicle) => vehicle.brand)
      .filter(removeDupes);

    const types = availableTransport
      .map((vehicle) => vehicle.type)
      .filter(removeDupes);

    return (
      <div className="App">
        <button onClick={fetchTransport}>Fetch whiskies</button>
        {isLoading && <h1>Fetching data</h1>}
        { transport.map(transport => <div>{transport.brand}</div>)}
        <br />
        { colors.map(color => <div>{color}</div>)}
        <br />
        { brands.map(brand => <div>{brand}</div>)}
        <br />
        { types.map(type => <div>{type}</div>)}
        {error && <h1>{error}</h1>}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        fetchTransport,
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
