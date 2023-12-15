import {Component} from 'react'

class Decrease extends Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    const newValue = this.props.value - 1;
     this.props.callbackParent(newValue);

  }
  render(){
    return(
      <button className="input-group__button--small" onClick={this.handleClick}>-</button>
    )
  }
}

export default Decrease