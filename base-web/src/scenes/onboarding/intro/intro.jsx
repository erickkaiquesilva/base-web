import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class IntroView extends Component {

    render() {
        return (
            <>
                <div className="row backgroundImageHome">
                    <div class="topnav">
                        {/* <a class="active" href="#home">Home</a> */}

                        <a href="#missao">Nossa Missão</a>
                        <a href="#reciclagem">Oque reciclamos</a>
                        <a href="#transfoMundo">Transforme o Mundo</a>
                        <Link to="/signin"><div className="logar">LOGAR</div></Link>
                    </div>

                    <div className="col xl12 imageBackground">
                        <div className="container">
                            <div className="row">

                                <center>
                                    <div className="border-green">
                                        <h1 >GREEN <span className = "colorCode">CODE</span> </h1>
                                    </div>
                                    <p>A preservação da natureza sempre será nosso maior valor</p>
                                </center>

                                <div className="botoes">
                                    <div className="col xs6">
                                        <Link to="/signUp"><button className="btnDefault1">Ajuda na preservação da natureza</button></Link>
                                    </div>

                                    <div className="col xs6">
                                        <button className="btnDefault2">Quem é a Green Code</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div id="missao"></div>
                    </div>

                </div>
                <section className="row backgroundDefault1">
                    <article className="col xl6 whoIsGreenCode">
                        <h1>QUEM É A <span className = "colorCode">GREEN CODE</span></h1>
                        <p>
                            A Green Code é uma empresa de soluções tecnológicas,
                            criada em 2019, com o objetivo de criar soluções pra área de preservação do meio ambiente.
                        </p>
                    </article>
                    <article className="col xl6 whatOurGoal">
                        <h1>QUAL NOSSO <span className = "colorCode2">OBJETIVO</span></h1>
                        <p>
                        A Green Code tem como objetivo criar soluções e conscientizar a 
                        população sobre preservação do meio ambiente desenvolvendo a construção de
                        atitudes para a preservação e com o desenvolvimento sustentável.
                        </p>
                    </article>
                    <footer>
                        <center><Link to="/signUp"><button className="btnSignDefault">AJUDAR NA PRESERVAÇÃO DO MUNDO</button></Link></center>
                    </footer>
                    <div id="reciclagem"></div>
                    <div className="help">
                        <h4>AJUDE NÓS RECICLAR</h4>
                        <p>Materiais que reciclamos</p>
                    </div>
                </section>
                <section className="row color3">
                    <article className="col xl6 color1">
                        <div className="imgGarrafa"></div>
                        <h4>VIDRO</h4>
                        <p>
                            No processo de fabricação das embalagens de vidro se encontra um diferencial do material: <br></br>
                            a redução dos impactos ambientais. O vidro é o único material 100% reciclável,
                            ou seja, com 1 kg de cacos é possível produzir a mesma pesagem em vidro novo, além de possuir
                             um ciclo infinito de renovação.
                        </p>
                    </article>
                    <article className="col xl6 color2">
                        <div className="imgGarrafa"></div>
                        <h4>PLÁSTICO</h4>
                        <p>
                            A reciclagem do plástico é de extrema importância para o meio ambiente. 
                            Quando reciclamos o plástico ou compramos plástico reciclado estamos contribuindo com o meio ambiente,
                             pois este material deixa de ir para os aterros sanitários ou para a natureza, poluindo rios, lagos, solo e matas.
                        </p>
                    </article>

                    <article className="col xl12 backgroundImageLixo">
                        <div className="row">
                            <h3>Pare de sujar seu planeta</h3>
                            <p>
                            "Nao faca isso pensando que é uma boa ação, tao pouco faça isso achando que é o melhor, 
                            tenha a certeza que é o único caminho, o futuro da raça humana depende de atitudes feitas hoje.
                             E saiba que o planeta terra contínuara, a unica duvida e se somos estaremas lá tambem"
                        </p>
                        </div>
                        <div id="transfoMundo"></div>
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
                        <p>GREEN CODE - <span className = "italic">por um mundo mais sustentável</span></p>
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