import { Component } from "react"
import { Link } from 'react-router-dom';

class Cadastrar extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.props.callbackParent();
  }
  render(){
    return(
        <div>
            <Link to={this.props.link} onClick={this.handleClick} className="default-button">Cadastrar</Link>
        </div>
        
    )
  }
}

export default Cadastrar;
