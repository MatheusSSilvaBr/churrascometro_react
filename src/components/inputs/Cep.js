import { Component } from "react"

class Cep extends Component{
  constructor(props) {
    super(props);
    this.state = {
      visName: 'hidden',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const newValue = event.target.value;
    this.props.callbackParent({cep : newValue});
    if(this.props.verify(newValue)){
      console.log('true')
      this.setState({visName: 'visible'})
    }else{
      this.setState({visName: 'hidden'})
    };
  }
  render(){
    return(
      <>
      <input type="number" id="postal-code" placeholder="Digite seu CEP" className="input-form" onChange={this.handleChange}/>
      <p style={{ visibility: this.props.visCep}} id="error-postal-code">Por favor, insira um CEP válido!</p>
      </>
    )
  }
}

export default Cep;