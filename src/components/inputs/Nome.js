import { Component } from "react"
class Nome extends Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const newValue = (event.target.value);
    this.props.callbackParent({nome: newValue}, {visName: 'hidden'});
  }

  render(){
    return(
      <>
      <input type="text" id="name" placeholder="Digite seu nome" value={this.props.nome} className="input-form" onChange={this.handleChange}/>
      <p  style={{ visibility: this.props.visName}} id="invalid-name">Por favor, insira um nome válido!</p>
      </>
    )
  }
}

export default Nome;