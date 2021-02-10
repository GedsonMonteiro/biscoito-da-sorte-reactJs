import React, { Component } from 'react';
import './estilo.css'

import biscoito from './assets/biscoito.png';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            textoFrase: ''
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        this.frases = [
            'O bom de ser pobre é que ninguém fica com você por interesse. O ruim é que ninguém fica com você.', 
            'Seja bom com seus sobrinhos, eles podem ser aqueles que te levarão vinho escondido no asilo.', 
            'A preguiça para você é o melhor dos 7 pecados, porque ela te impedirá de cometer os outros 6.', 
            'O seu esporte favorito é pular os anúncios da internet.',
            'Encontre alguém que lute por você, assim como os seus tios lutam pelo terreno da sua avó.',
            'Não adianta você ser bonito por dentro se você não pode virar do avesso.',
            'Se ninguém te dá valor, compre uma calculadora.',
            'Ou você tem barriga definida ou aproveita a vida. Pois os dois não dá.'
        ];
    }

    quebraBiscoito(){
        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "'
        this.setState(state);

    }

    render(){
        return(
            <div className="container">
                <img src={biscoito} className="img" />
                <Botao nome="Abrir" acaoBtn={this.quebraBiscoito}/>
                <h3 className="textoFrase">{this.state.textoFrase}</h3>
            </div>         
        );
    }
}

class Botao extends Component{
    render(){
        return(
            <div>
                <button class="botao" onClick={this.props.acaoBtn} >{this.props.nome}</button>
            </div>
        );
    }
}



export default App;

{/*Fortune Cookie - ReactJs*/}