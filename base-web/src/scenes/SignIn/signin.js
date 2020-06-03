import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SignIn extends Component {

    render() {
        return (
            <>

                <div className="container-fluid fundo-login">
                    <div className="row">
                        <Link to="/"><button className="col xl2 buttom-back">Não quero fazer login</button></Link>
                        <div className="col xl8 text-topo">
                            <h1>LOGIN</h1>
                            <p>Green Code um jeito inteligente de reciclar.</p>

                        </div>
                    </div>
                    <div className="row">
                        <article className="col-lg-12 box-login">
                            <div className="formulario-login">
                                <form onSubmit={this.handleSubmit}>

                                    <input
                                        // onChange={e => this.handleChange(e)}
                                        className="formulario-linha"
                                        id="email"

                                        placeholder="Seu e-mail de acesso"
                                    />

                                    <input className="formulario-linha"
                                        // onChange={e => this.handleChange(e)}
                                        id="senha"

                                        placeholder="Sua senha de acesso"
                                    />
                                    <label class="checked-box">
                                        <input type="checkbox"/>
                                        <span class="checkmark">Lembrar minhas credenciais</span>
                                    </label>
                                    <Link to = "/welcome"><input className="btn-formulario-linha" type="submit" value="Login" /></Link>
                                    <Link><a className="link-esqueciSenha">Esqueci Minha Senha</a></Link>
                                </form>
                            </div>
                            <p className="texto-cadastrese">Não tem uma conta ainda?
                      Faça já seu <Link to="/signUp"><a>cadastro</a></Link> e comece a recicla de uma maneira divertida e diferente.</p>
                        </article>
                        <div className="col-lg-6"></div>
                    </div>
                </div>
            </>
        );
    }
}
