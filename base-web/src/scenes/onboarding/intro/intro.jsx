import React, { Component } from 'react';

class IntroView extends Component {

    render() {
        return (
            <>
                <div className="row">
                    <nav>
                        <div class="nav-wrapper backgroundDefault">
                            <a href="#" class="brand-logo">Logo</a>
                            <ul id="nav-mobile" class="right hide-on-med-and-down">
                                <li><a href="">Mundo Limpo</a></li>
                                <li><a href="">O Que Queremos</a></li>
                                <li><a href="">Nossa Missão</a></li>
                                <li><a href="">Transforme o Mundo</a></li>
                            </ul>
                        </div>
                    </nav>
                    <div className="col xl12 imageBackground">
                        <div className="container backgroundDefault">
                            <div className="row">
                                <center>
                                    <h1>TESTE</h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                                </center>
                                <div className="col xs6">
                                    <button className="btn btnDefault">Ajuda na preservação da natureza</button>
                                </div>
                                <div className="col xs6">
                                    <button className="btn btnDefault">Quem é a Green Code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="row backgroundDefault1">
                    <div className="col xl6">
                        <h2>LADO ESQUERDO</h2>
                    </div>
                    <div className="col xl6">
                        <h2>LADO DIREITO</h2>
                    </div>
                    <footer>
                        <center><button>BOTÃO RODAPÉ</button></center>
                    </footer>
                </section>
            </>
        );
    }
}

export default IntroView;