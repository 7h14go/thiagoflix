import React from 'react';
import PageDefault from '../../components/PageDefault';
import { Main } from './estilo';
import Img from '../../assets/img/404.png'

export default function PaginaErro() {
  return (
   <PageDefault>
      <Main>
        <img src={Img} alt="Erro404"/>
        <div >
          <h1>Opss!</h1>
          <h2>Página não encontrada</h2>
        </div>
      </Main>
   </PageDefault>
  );
}