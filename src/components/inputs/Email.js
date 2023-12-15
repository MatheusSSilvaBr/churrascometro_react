import { Component } from "react"

class Email extends Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const newValue = (event.target.value);
    this.props.callbackParent({email: newValue});
  }
  render(){
    return(
      <>
      <input type="email" id="email" placeholder="Digite seu email" className="input-form" onChange={this.handleChange}/>
      <p style={{ visibility: this.props.visEmail}} id="invalid-email">Por favor, insira um e-mail válido!</p>
      </>
    )
  }
}

export default Email;