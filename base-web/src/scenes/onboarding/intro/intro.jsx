import React, { Component } from 'react';

class IntroView extends Component {

    render() {
        return (
            <>
                <div className="row backgroundImageHome">
                    <nav>
                        <div class="nav-wrapper backgroundDefault">
                            <a href="#" class="brand-logo"></a>
                            <ul id="nav-mobile" class="right hide-on-med-and-down backgroundDefault">
                                <li><a href="">Mundo Limpo</a></li>
                                <li><a href="">O Que Queremos</a></li>
                                <li><a href="">Nossa Missão</a></li>
                                <li><a href="">Transforme o Mundo</a></li>
                            </ul>
                        </div>
                    </nav>
                    <div className="col xl12 imageBackground">
                        <div className="container">
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
                    <article className="col xl6 whoIsGreenCode">
                        <h1>Quem é a Green Code</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </article>
                    <article className="col xl6 whatOurGoal">
                        <h1>Qual Nosso Objetivo</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </article>
                    <footer>
                        <center><button className="btnSignDefault">BOTÃO RODAPÉ</button></center>
                    </footer>
                </section>
                <section className="row color3">
                    <article className="col xl6 color1">
                        <h4>Esquerda</h4>
                    </article>
                    <article className="col xl6 color2">
                        <h4>Direita</h4>
                    </article>
                </section>
            </>
        );
    }
}

export default IntroView;