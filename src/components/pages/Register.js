import { Component } from "react";
import PropTypes from 'prop-types';
import Nome from "../inputs/Nome";
import Email from "../inputs/Email";
import Cep from "../inputs/Cep";
import Comunicacao from "../checkbox/Comunicacao";
import Cadastrar from "../buttons/Cadastrar";
import { Link } from 'react-router-dom';

class Register extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      email: '',
      cep: '',
      link: '/register',
      visName: 'hidden',
      visCep: 'hidden',
      visEmail: 'hidden',
    }
    this.verifyName = this.verifyName.bind(this);
    this.verifyCep = this.verifyCep.bind(this);
    this.verifyEmail = this.verifyEmail.bind(this);
    this.setData = this.setData.bind(this);
    this.verifyData = this.verifyData.bind(this);
    this.alerts = this.alerts.bind(this);
  }
  alerts(){
    if(!this.verifyCep()){
      this.setState({visCep: 'visible'})
    }
    if(!this.verifyEmail()){
      this.setState({visEmail: 'visible'})
    }
    if(!this.verifyName()){
      this.setState({visName: 'visible'})
    }
    }

  setData(object, alerts){
    this.setState(object, this.verifyData)
    this.setState(alerts)
  }

  verifyData(){
    if(this.verifyCep() && this.verifyEmail() && this.verifyName()){
      this.setState({link: '/result'})
    }else{
      this.setState({link: '/register'})
    }
  }
  verifyCep(){
    if(this.state.cep > 0){
      return true
    }else{
      return false
    }
  }  

  verifyName(){
    if(this.state.nome > ''){
      return true
    }else{
      return false
    } 
  }

  verifyEmail(){
      var re = /\S+@\S+\.\S+/;
      const result = re.test(this.state.email);
      if(result){
        return true
      }else{
        return false
      }
  }  

  render(){
    return(
      <div className="container">
                <h1>Churrascômetro</h1>
                <div className="calculator">
                    <div className="row">
                        <div className="input-form-group">
                            <p id="header-form">Fique por dentro de todas as novidades. Cadastre seu e-mail e receba promoções especiais!</p>
                            <form>
                                <Nome  visName={this.state.visName} verify={(value) => this.verifyName(value)} callbackParent={(object, value) => this.setData(object, value)} nome={this.state.nome}/>
                                <Email visEmail={this.state.visEmail} verify={(value) => this.verifyEmail(value)} callbackParent={(object, value) => this.setData(object, value)} email={this.state.email}/>
                                <Cep  visCep={this.state.visCep} verify={(value) => this.verifyCep(value)} callbackParent={(object, value) => this.setData(object, value)} cep={this.state.cep}/>                        
                            </form>
                            <Comunicacao />
                        </div>
                    </div>
                    <div className="row">
                      <Cadastrar callbackParent={() => this.alerts()} link={this.state.link}/>
                      <div id="nav-container">
                        <Link to='/' id="back-nav">Voltar</Link>
                        <Link to='/result' id="skip-register">Pular</Link>
                      </div>
                    </div>
                </div>
                <div className="theme-container">
                    <label id="label-theme-text" htmlFor="input-theme">Tema Escuro</label>
                    <label className="switch">
                        <input type="checkbox" id="input-theme" defaultChecked="checked"/>
                          <span className="slider">
                        </span>
                    </label>
                </div>
            </div>
    )
  }
}

Register.propTypes = {
  nome: PropTypes.string,
  email: PropTypes.string,
  cep: PropTypes.string,
}

export default Register;