import React, { Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Home from './components/pages/Home.js';
import Register from './components/pages/Register.js';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Result from './components/pages/Result.js';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            homem: 0,
            mulher: 0,
            crianca: 0,
            link: '/',
        }
        this.setStatus = this.setStatus.bind(this);
        this.verifyData = this.verifyData.bind(this);
        
    }

    verifyData(){
        if(this.state.homem + this.state.mulher + this.state.crianca > 0){
            this.setState({link: '/register'})
          return true
        }else{
            this.setState({link: '/'})
          return false
        }
      }
    
    setStatus(object){
        if(object.accept === false){
            this.verifyData()
        }else if (typeof object.homem === 'number'){
            this.setState({homem: object.homem}, this.verifyData)
        }else if(typeof object.mulher === 'number'){
            this.setState({mulher: object.mulher}, this.verifyData)
        }else if(typeof object.crianca === 'number'){
            this.setState({crianca: object.crianca}, this.verifyData)
        }
    }
 
    setNewStatus(object, chave){
        this.setState({[object]: chave})
    }
    render(){
        return( 
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home link={this.state.link} homem={this.state.homem}  mulher={this.state.mulher} crianca={this.state.crianca} callbackParent={(homem, mulher, crianca) => this.setStatus(homem, mulher, crianca)} callBack={(object, value) => this.setNewStatus(object, value)}/>} />
                    <Route path="/result" element={<Result data={this.state}/>} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        )
    }      
}

App.propTypes = {
    homem: PropTypes.number,
    mulher: PropTypes.number,
    crianca: PropTypes.number
}


export default App;
