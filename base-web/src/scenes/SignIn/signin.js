import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signIn } from "../../Actions/resquest";
import { signInMock } from "../../Actions/requetMock"

export default class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            senha: "",
            Error: ""
        };
    }

    componentDidMount() {
        if (localStorage.getItem('user') !== null) {
            this.props.history.push('/dashboard')
        }
    }

    handleChange = event => {
        console.log(event.target.value);

        const state = Object.assign({}, this.state);

        let field = event.target.id;

        state[field] = event.target.value;

        this.setState(state);
    };

    handleSubmit = event => {
        event.preventDefault();

        var payload = {
            email: this.state.email,
            senha: this.state.senha
        };

        try {
            signInMock(this.state)
                .then((response) => {
                    if (response.status == 200) {
                        console.log("PASSOU")
                        localStorage.setItem('user', JSON.stringify(response.data))
                        this.props.history.push('/dashboard')
                    }
                    localStorage.setItem('user', JSON.stringify(response.data))
                    this.props.history.push('/dashboard')
                })
                .catch(e => {
                    console.log("Error XPTO")
                    this.state.Error = "OPS!!! Usuário ou Senha inválido!"
                    this.setState(this.state)
                })
        } catch (err) {
            console.log("error ", err);
        }
    }

    render() {
        console.log(this.state.Error)
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
                                        onChange={e => this.handleChange(e)}
                                        className="formulario-linha"
                                        id="email"
                                        placeholder="Seu e-mail de acesso"
                                    />

                                    <input className="formulario-linha"
                                        onChange={e => this.handleChange(e)}
                                        id="senha"
                                        placeholder="Sua senha de acesso"
                                        type = "password"
                                    />
                                    <p className="textErrorLogin">
                                        {this.state.Error}
                                    </p>
                                    <label class="checked-box">
                                        <input type="checkbox" />
                                        <span class="checkmark">Lembrar minhas credenciais</span>
                                    </label>
                                    <input className="btn-formulario-linha" type="submit" value="Login" />
                                    
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
