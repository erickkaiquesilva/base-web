import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { balance } from "../../Actions/resquest";
import { balanceMock } from "../../Actions/requetMock";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authentication: false,
      id_user: 0,
      name: "",
      lastname: "",
      recorded_points: 0,
      recorded_items: 0
    }
  }
  componentWillUpdate() {
    this.state.authentication = true
    this.setState({ authentication: this.state.authentication })
    if (this.state.authentication) {
      this.props.history.push('/')
    }
  }

  componentWillUnmount() {
   
    let user;
    if (localStorage.getItem('user') === null) {
      this.props.history.push("/");
    } else {
      user = JSON.parse(localStorage.getItem('user'));
      this.setState({ id_user: user.id, name: user.nome, lastname: user.sobrenome })
    }

    try {
      balanceMock(user)
        .then((response) => {
          console.log("------ BALANCE", response.data)
          this.setState({ recorded_points: response.data.pontos, recorded_items: response.data.totalItens })
        })
        .catch(err => console.log(err))
    } catch (err) {
      console.log("error ", err);
    }
  }

  

  handleClick() {
    this.state.authentication = true
    this.setState({ authentication: this.state.authentication })

    if (this.state.authentication) {
      localStorage.clear()
      const logout = localStorage.getItem('user');
      if (logout === null) {
        this.props.history.push("/");
      }
    }
  };

  render() {

    return (
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-5 informacoes-usuario">
          <h1><span className="text1">OLÁ,</span><br></br> <span className="text2">Victor Ferreira</span></h1>
          <button onClick={this.handleClick.bind(this)} className="btn-logout"></button>

          <div title="Usuario" className=" btn-user"></div>

          <div title="Notificações" className=" btn-notification"></div>

          <div className="congratulations">
            <p>Parabéns Victor pela sua ajuda em transforma um mundo mais limpo,veja o
                  quanto de materiais você ja ajudou a reciclar e o quanto já ganhou com isso.</p>
          </div>
          <div className="box-pontos">
            <p>{this.state.recorded_points} Pts Greens</p>
          </div>
          <div className="box-itens">
            <p>{this.state.recorded_items} Itens Reciclados</p>
          </div>

        </div>
        <div className="col-lg-5 secao-objetivo">
          <p> Seus desafios pendentes </p>
          <div className="desafio1">
            <div className="img-verdin"></div>
            <p>Recicle até o sabádo 15 Garrfas Pets
              e ganhe pontos multiplos por cada garrafa reciclada </p>

            <div className="desafio2">
              <div className="img-verdin"></div>
              <p> Recicle de 10 á 20 garrafas pets por 5 dias,e ganhe em pontos em dobro no final.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-5 marktplace">
          <p>Troque seus pontos por produtos,serviços ou doe para instituições de caridade.</p>
        </div>
        <div className="marktplace-green">
          <p>MARKTPLACE GREEN</p>
        </div>
        <div className="col-lg-1"></div>
      </div>
    )
  }
}
