import React, { Component } from 'react';
import SubContainer from './subContainer';

class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const markets = [];
    // The if statement checks whether button has been selected, only rendering those
    // that have been selected. Subcontainer is how our shopping lists are rendered.
    if (this.props.props.wholeFoodsSelected) {
      markets.push(
        <SubContainer
          props={{
            // sorry for the prop drilling :/
            props: this.props.props,
            marketName: 'Whole Foods',
            subTotal: this.props.props.wholeFoodsSubtotal,
            priceList: this.props.props.wholeFoodsList,
            maxBudget: this.props.props.maxBudget,
          }}
          deleteRow={this.props.deleteRow}
          key="wholeFoodsList"
        />
      );
    }
    if (this.props.props.traderJoesSelected) {
      markets.push(
        <SubContainer
          props={{
            props: this.props.props,
            marketName: 'Trader Joes',
            subTotal: this.props.props.traderJoesSubtotal,
            priceList: this.props.props.traderJoesList,
            maxBudget: this.props.props.maxBudget,
          }}
          deleteRow={this.props.deleteRow}
          key="traderJoesList"
        />
      );
    }
    if (this.props.props.ralphsSelected) {
      markets.push(
        <SubContainer
          props={{
            props: this.props.props,
            marketName: 'Ralphs',
            subTotal: this.props.props.ralphsSubtotal,
            priceList: this.props.props.ralphsList,
            maxBudget: this.props.props.maxBudget,
          }}
          deleteRow={this.props.deleteRow}
          key="ralphsList"
        />
      );
    }
    // Once all of the subcontainers have been pushed, the return statement renders them.
    return <div className="marketsDisplay">{markets}</div>;
  }
}

export default Container;
