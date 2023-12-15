import React, { Component } from "react"

class Result extends Component{ 
    render() {
        const data = this.props.data;
      return (
        <div className="container" onClick={this.handleChange}>
        <h1>Churrascômetro</h1>
        <div className="calculator">
            <div>
                <div className="result-total-guest">
                    <p>Confira a lista para o seu churrasco!</p>
                    <p id="total-guest">{data.convidados} convidados</p>
                    <span className="guest-list">{data.homem} homens</span>
                    <span className="guest-list">{data.mulher} mulheres</span>
                    <span className="guest-list">{data.crianca} crianças</span>
                </div>
                <div className="input-group-result">
                    <div id="header-result">
                        <p>ITEM</p>
                        <p>QUANTIDADE</p>
                    </div>
                    <ul className="results">
                        <li><strong>Carne</strong><span>{data.meat} kg</span></li>
                        <li><strong>Pão de Alho</strong><span>{data.garlicBread} unidades</span></li>
                        <li><strong>Refrigerante</strong><span>{data.drink} garrafa de 2 L</span></li>
                        <li><strong>Água</strong><span>{data.water} garrafa de 1 L</span></li>
                        <li><strong>Carvão</strong><span>{data.coal} kg</span></li>
                        <li><strong>Sal</strong><span>{data.salt} kg</span></li>
                        <li><strong>Gelo</strong><span>{data.ice} kg</span></li>
                        <li><strong>Cerveja</strong><span>{data.beer} garrafa de 600ml</span></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div>
                    <a href="/" className="default-button">Novo cálculo</a>
                </div>
            </div>
        </div>
        <div className="theme-container"><label id="label-theme-text" htmlFor="input-theme">Tema Escuro</label>
            <label  className="switch">
                <input type="checkbox" id="input-theme" defaultChecked="checked"/>
                <span className="slider"></span>
            </label>
        </div>
      </div>
      );
    }
}

export default Result;