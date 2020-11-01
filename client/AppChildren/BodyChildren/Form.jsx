import React, { Component } from 'react'
import logo from './wholeFoods.png'
import logos from './traders.png'
import logoss from './ralphs.png'
import { render } from 'react-dom'


class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      food : ['food'],
      WholeFoods: false,
      TraderJoes: false,
      Ralphs: false,
      totalPrice : ['price']
    }
   this.storeClick = this.storeClick.bind(this)
  }

storeClick(store) { 
  // console.log(this.state.stores[store])
if (this.state[store] === true) {
  this.setState({[store] : false})
  console.log('this', this.state[store])
  // console.log(this.state.stores[store])
  }
else if (this.state[store] === false) {
  this.setState({[store] : true})
  //when brackets it doesnt change it to true returns false
  //when dot notation it makes it undefined and then returns true
  console.log('hi', this.state[store])
  // console.log(this.state.stores[store])
}
}

  render(){
    return (
      <div>
        <div id="middle" className="TopInput">
          <input onClick={() => this.storeClick('WholeFoods')} type="image" className="logos"src={logo} alt="WholeFoods"></input>
          <input onClick={() => this.storeClick('TraderJoes')} type="image" className="logos"src={logos} alt="Traders"></input>
          <input onClick={() => this.storeClick('Ralphs')} type="image" className="logos"src={logoss} alt="Ralphs"></input>
        </div>
        <div className="BottomInputs">
        <div id="inputs">
          <input className="field" type="text" placeholder="Food Item" />
          <button className="btn" type="submit">+</button>
        </div>
        <div className="budget">
          <input className="field"type="text" placeholder="Max Budget" />
       </div>
        </div>
      </div>
    )
  }
}

export default Form