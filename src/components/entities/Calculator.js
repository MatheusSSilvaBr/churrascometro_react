import { Component } from "react"
import { Link } from 'react-router-dom';

class Calculator extends Component{
  constructor(props){
    super(props);
    this.setStatus = this.setStatus.bind(this);
  }

  setStatus(){
    if(this.props.homem + this.props.mulher + this.props.crianca <= 0){
      
      this.props.display()
    }
    this.props.callbackParent('convidados', (this.props.homem + this.props.mulher + this.props.crianca))
    this.props.callbackParent('meat', this.calculateMeat())
    this.props.callbackParent('garlicBread', this.calculateGarlicBread())
    this.props.callbackParent('coal', this.calculateCoal())
    this.props.callbackParent('salt', this.calculateSalt())
    this.props.callbackParent('ice', this.calculateIce())
    this.props.callbackParent('drink', this.calculateDrink())
    this.props.callbackParent('beer', this.calculateBeer())
    this.props.callbackParent('water', this.calculateWater())  
  }

calculateMeat(){
  return ((this.props.homem * 0.4) + (this.props.mulher * 0.32) + (this.props.crianca * 0.2)).toFixed(2);
  
}

calculateGarlicBread(){
  return (((this.props.homem + this.props.mulher) * 2) + this.props.crianca * 1);
}

calculateCoal(){
  return (this.props.homem + this.props.mulher + this.props.crianca);
}

calculateSalt(){
  return (this.props.homem + this.props.mulher + this.props.crianca) * 0.04;
}

calculateIce(){
  const multiply = (this.props.homem + this.props.mulher + this.props.crianca) / 10;
  const ice = (multiply) * 5;
  return ice
}

calculateDrink(){
  const multiply = (this.props.homem + this.props.mulher + this.props.crianca) / 5;
  const drink = parseInt(multiply) ;
  return drink
}

calculateBeer(){
  return ((this.props.homem + this.props.mulher) * 3);
}

calculateWater(){
  const multiply = (this.props.homem + this.props.mulher + this.props.crianca) / 5
  const drink = parseInt(multiply);
  return drink;
}

render(){
  return(
    <>
    <Link to={this.props.link} className="default-button" onClick={this.setStatus}>Calcular</Link>
    </>
  )
}
}

export default Calculator;