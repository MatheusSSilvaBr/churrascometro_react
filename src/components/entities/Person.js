import { Component } from 'react';
import Quantity from '../inputs/Quantity';
import Increase from '../buttons/Increase';
import Decrease from '../buttons/Decrease';

class Person extends Component {

  MeuComponente = ( numero ) => {
    if (typeof numero !== 'number') {
      return false; // ou lança um erro, dependendo do seu caso
    }
  
    // Validar se é positivo ou negativo
    if (numero >= 0) {
      // Lógica para números positivos
      return true
    } else {
      // Lógica para números negativos
      return false
    }
  };

  onChildChanged(num) {
    if (this.MeuComponente(num)) {
      this.props.restart()
      this.props.callbackParent(num, true)
    }else{
      this.props.callbackParent('', false)
      this.props.display()
    }
  }

  render() {
    return (
      <div className="input-group">
        <Quantity label={this.props.label} id={this.props.id} value={this.props.value} callbackParent={(num) => this.onChildChanged(num)} />
        <div className="button-group">
          <Decrease value={this.props.value} callbackParent={(num) => this.onChildChanged(num)} />
          <Increase value={this.props.value} callbackParent={(num) => this.onChildChanged(num)} />
        </div>
      </div>
    );
  }
}

export default Person;