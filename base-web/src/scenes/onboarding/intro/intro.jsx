import React, { Component } from 'react';

class IntroView extends Component {

    render() {
        return (
            <>
                <div className="row backgroundImageHome">
                    <div class="topnav">
                        {/* <a class="active" href="#home">Home</a> */}
                        <a href="#mundoLimpo">Mundo Limpo</a>
                        <a href="#oqQremos">O Que Queremos</a>
                        <a href="#nossaMissao">Nossa Missão</a>
                        <a href="#transfoMundo">Transforme o Mundo</a>
                        <a href="#login">LOGAR</a>
                    </div>
                    <div className="col xl12 imageBackground">
                        <div className="container">
                            <div className="row">
                                <center>
                                    <h1>GREEN CODE</h1>
                                    <p>A preservação da natureza sempre será nosso maior valor</p>
                                </center>
                                <div className="botoes">
                                    <div className="col xs6">
                                        <button className="btnDefault1">Ajuda na preservação da natureza</button>
                                    </div>
                                    <div className="col xs6">
                                        <button className="btnDefault2">Quem é a Green Code</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="row backgroundDefault1">
                    <article className="col xl6 whoIsGreenCode">
                        <h1>QUEM É A GREEN CODE</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                             when an unknown printer took a galley of type and scrambled it to make a type
                             specimen book.
                        </p>
                    </article>
                    <article className="col xl6 whatOurGoal">
                        <h1>QUAL NOSSO OBJETIVO</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book.
                        </p>
                    </article>
                    <footer>
                        <center><button className="btnSignDefault">AJUDAR NA PRESERVAÇÃO DO MUNDO</button></center>
                    </footer>
                    <div className="help">
                        <h4>AJUDE NÓS RECICLAR</h4>
                    </div>
                </section>
                <section className="row color3">
                    <article className="col xl6 color1">
                    <div className="imgGarrafa"></div>
                        <h4>VIDRO</h4>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                             when an unknown printer took a galley of type and scrambled it to make a type
                             specimen book.
                        </p>
                    </article>
                    <article className="col xl6 color2">
                        <div className="imgGarrafa"></div>
                        <h4>PLÁSTICO</h4>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                             when an unknown printer took a galley of type and scrambled it to make a type
                             specimen book.
                        </p>
                    </article>

                    <article className="col xl12 backgroundImageLixo">
                        <div className="row">
                            <h3>Pare de sujar seu planeta</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                 when an unknown printer took a galley of type and scrambled it to make a type
                                 specimen book.
                        </p>
                        </div>
                    </article>

                    <article className="col xl12 backgroundGreen">
                        <div className="imgCelular">
                            
                            <p>Ajude a Green Code a deixar o mundo mais limpo.</p>
                            <h1>Baixe o app nas plataformas</h1>
                            <div className="imgRetangulo"></div>

                            <div className="imgPlataformas"></div>
                        </div>

                    </article>

                    <article className="col xl12 footer">
                        <p>GREEN CODE - por um mundo mais sustentável</p>
                        <ul>
                            <li><a href="">- Fale Conosco</a></li>
                            <li><a href="">- Seja um Parceiro</a></li>
                            <li><a href="">- Dúvidas Frequentes</a></li>
                        </ul>
                        <div className="imgRedeSocial"></div>
                    </article>

                </section>

            </>
        );
    }
}

export default IntroView;