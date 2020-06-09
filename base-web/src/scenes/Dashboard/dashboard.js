import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

export default class Dashboard extends Component {

  render() {

    return (
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-5 informacoes-usuario">
          <h1><span className="text1">OLÁ,</span><br></br> <span className="text2">Victor Ferreira</span></h1>
          <Link to="/signin"><div title="Sair" className=" btn-logout"></div></Link>

          <div title="Usuario" className=" btn-user"></div>

          <div title="Notificações" className=" btn-notification"></div>

          <div className="congratulations">
            <p>Parabéns Erick pela sua ajuda em transforma um mundo mais limpo,veja o
                  quanto de materiais você ja ajudou a reciclar e o quanto já ganhou com isso.</p>
          </div>
          <div className="box-pontos">
            <p>100 Pts Greens</p>
          </div>
          <div className="box-itens">
            <p>200 Itens Reciclados</p>
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
