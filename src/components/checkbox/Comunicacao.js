import { Component } from "react"

class Comunicacao extends Component{
  render(){
    return(
      <div id="consent-input">
          <input type="checkbox" id="consent-checkbox" name="consentInput" defaultChecked="checked"/>
          <label htmlFor="consent-checkbox" id="consent-label">Concordo em receber comunicações e ofertas personalizadas de acordo com meus interesses.</label>
      </div>
    )
  }
}

export default Comunicacao;
