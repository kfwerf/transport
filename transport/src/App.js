import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchTransport, updateColor, updateBrand, updateType } from './transport/actions';

const getFilteredList = (list, type, color, brand) => [...list]
  .filter((vehicle) => !type || type === vehicle.type)
  .filter((vehicle) => !color || !!vehicle.colors && vehicle.colors.indexOf(color) !== -1)
  .filter((vehicle) => !brand || brand === vehicle.brand);


class App extends Component {
  onColorChanged({ target: { value: color } }) {
    this.props.updateColor({ color });
  }
  onBrandChanged({ target: { value: brand } }) {
    this.props.updateBrand({ brand });
  }
  onTypeChanged({ target: { value: type } }) {
    this.props.updateType({ type });
  }
  get filtered() {
    const { transport, type, color, brand } = this.transportState;
    return getFilteredList(transport, type, color, brand);
  }
  get transportState() {
    return this.props.transport;
  }
  render() {
    const {
      fetchTransport,
    } = this.props;
    const {
      isLoading,
      error,
      colors,
      brands,
      types,
      color,
      brand,
      type,
    } = this.transportState;

    return (
      <div className="App">
        <button onClick={fetchTransport}>Fetch whiskies</button>
        {isLoading && <h1>Fetching data</h1>}

        <select value={color} onChange={this.onColorChanged.bind(this)}>
          <option value="">Select</option>
          {colors.map((option, idx) => <option key={idx}>{option}</option>)}
        </select>

        <select value={brand} onChange={this.onBrandChanged.bind(this)}>
          <option value="">Select</option>
          {brands.map((option, idx) => <option key={idx}>{option}</option>)}
        </select>

        <select value={type} onChange={this.onTypeChanged.bind(this)}>
          <option value="">Select</option>
          {types.map((option, idx) => <option key={idx}>{option}</option>)}
        </select>

        <ul>
          <li>{ this.filtered.map((transport) => <div key={transport.id}>{transport.description}</div>)}</li>
        </ul>
        {error && <h1>{error}</h1>}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        fetchTransport,
        updateColor,
        updateBrand,
        updateType,
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
