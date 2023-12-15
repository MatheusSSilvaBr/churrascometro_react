import React,{ Component } from 'react';
import Theme from '../buttons/Theme.js';
import Person from '../entities/Person.js'
import Calculator from '../entities/Calculator.js';

class Home extends Component {
  constructor(props) {
      super(props);
      this.onChildChanged = this.onChildChanged.bind(this);
      this.onMenChanged = this.onMenChanged.bind(this);
      this.onWomenChanged = this.onWomenChanged.bind(this);
      this.restartDisplay = this.restartDisplay.bind(this);
      this.setDisplayNumber = this.setDisplayNumber.bind(this);
      this.setDisplayNoInput = this.setDisplayNoInput.bind(this);
      this.state = {
          displayNumber: 'hidden',
          displayNoInput: 'hidden',
          }
  }

  setDisplayNumber(){
    this.setState({displayNumber: 'visible'})
  }

  setDisplayNoInput(){
    this.setState({displayNoInput: 'visible'})
  }

  restartDisplay(){
    this.setState({
      displayNumber: 'hidden',
      displayNoInput: 'hidden'})
  }
  onMenChanged(num, accept) {
    this.props.callbackParent({homem: num, accept: accept})
  }

  onWomenChanged(num, accept) {
    this.props.callbackParent({mulher: num, accept: accept})
    }

  onChildChanged(num, accept) {
    this.props.callbackParent({crianca: num, accept: accept})
    }

  render() {
      return (
          <div className="container" >
                      <h1>Churrascômetro</h1>
                      <div className="calculator">
                          <h3>Precisa de uma ajudinha com o churrasco? 
                              <br></br>
                              Quantas pessoas vão participar?
                          </h3>
                          <div className="row-first">
                              <Person restart={() => this.restartDisplay()} id='Homens' label='Homens' display={() => this.setDisplayNumber()} callbackParent={(num) => this.onMenChanged(num)} value={this.props.homem}/>
                              <Person restart={() => this.restartDisplay()} id='Mulheres' label='Mulheres' display={() => this.setDisplayNumber()} callbackParent={(num) => this.onWomenChanged(num)} value={this.props.mulher}/>
                              <Person restart={() => this.restartDisplay()} id='Criancas' label='Criancas' display={() => this.setDisplayNumber()}  callbackParent={(num) => this.onChildChanged(num)} value={this.props.crianca}/>
                          </div>
                          <div className="row">
                                 <div>
                                     <p id="invalid-input" style={{ visibility: this.state.displayNumber}} >Por favor, insira somente números positivos!</p>
                                     <p id="no-input" style={{ visibility: this.state.displayNoInput}}>Por favor, selecione a quantidade de pessoas!</p>
                                     <Calculator display={() => this.setDisplayNoInput()} link={this.props.link} callbackParent={(object, chave) => this.props.callBack(object, chave)} homem={this.props.homem} mulher={this.props.mulher} crianca={this.props.crianca}/>
                                 </div>
                          </div>
                        </div>
                  <Theme />
           </div>
      );
  }
}

export default Home;