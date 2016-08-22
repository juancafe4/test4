import React from 'react';

import StoreMarket from '../stores/StoreMarket'
import MarketActions from '../actions/MarketActions'

class DisplayInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      info: []
    }
    this._onChange = this._onChange.bind(this);
    this.moreInfo = this.moreInfo.bind(this);

  }

  componentDidMount() {
    StoreMarket.startListening(this._onChange);
  }

  componentWillUnmount() {
    StoreMarket.stopListening(this._onChange);
  }
  _onChange() {
    this.setState({
      info: StoreMarket.getInfo()
    });
  }
  moreInfo() {
    MarketActions.receiveDetails({symbol: this.state.info.Symbol})
  }
  render() {

    if (this.state.info.length) {
      let trs;
      return (
        <table className='table'
        
       </table>
      )
    }
    return <div>DisplayInfo</div>;
  }
}

export default DisplayInfo;
