import React, { useState } from 'react'
import{ Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault';
import FormFiled from '../../../components/FormFiled';

function CadastroCategoria(){

  
  const valoresIniciais ={
    nome:'',
    descricao:'',
    cor:'',
  }
  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);

  function setValor(chave, valor){    
    setValores({
      ...valores,
      [chave]: valor, //nome: 'valor'
    })    
  }

  function handleChange(infosDoEvento){
    setValor(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value      
    );    
  }

  return(
    <PageDefault>
      <h1>Cadastro de Categoria: {valores.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault()
        console.log('Você tentou enviar um form né?')
        setCategorias([
          ...categorias,
          valores
        ]);
        setValores(valoresIniciais)
      }}>
        <FormFiled
          label="Nome da Categoria"
          type= "texto"
          name = "nome"
          value={valores.nome}
          onChange={handleChange}
        />

        <FormFiled
          label="Descrição"
          type= '????'
          name = 'descricao'
          value={valores.descricao}
          onChange={handleChange}
        />
{/* 
        <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={valores.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <FormFiled
          label="Cor"
          type= 'color'
          name = 'cor'
          value={valores.nome}
          onChange={handleChange}
        />


        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice)=>{
          return(
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>
      <Link to="/">
        Ir para home
      </Link>

    </PageDefault>      
  )
}

export default CadastroCategoria;