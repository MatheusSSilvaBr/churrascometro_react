import { Component } from "react";

class Quantity extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const newValue = parseInt(event.target.value);
    this.props.callbackParent(newValue);
  }

  render() {
    return (
      <>
      <label htmlFor={this.props.id}>{this.props.label}</label>
      <input type="number" id={this.props.id} value={this.props.value} className="input-valid" onChange={this.handleChange}/>
      </>
    );
  }
}

export default Quantity;