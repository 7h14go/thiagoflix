import React, { useState, useEffect } from 'react';
import{ Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormFiled from '../../../components/FormFiled';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriaRepository from '../../../repositories/categorias'

function CadastroCategoria(){

  const valoresIniciais ={
    titulo:'',
    descricao:'',
    cor:'#000000'
  }

  const {handleChange, valores, clearForm} = useForm(valoresIniciais)
  const [categorias, setCategorias] = useState([]);

  useEffect(()=>{    
    const URL = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias'
    :'https://thiagoflix.herokuapp.com/categorias'

    fetch(URL).then(async (respostaDoServidor) => { 
      const resposta = await respostaDoServidor.json();
      setCategorias([
        ...resposta
      ]);
     });

  },[])

  return(
    <PageDefault>
      <h1>Cadastro de Categoria: {valores.titulo}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault()
        //Descomentar daqui até o alert e retirar o alert 
        // setCategorias([
        //   ...categorias,
        //   valores
        // ]);

        // categoriaRepository.createCategorias({
        //   titulo: valores.titulo,
        //   descricao: valores.descricao,
        //   cor: valores.cor
        //  })
        alert("Foi mal, desabilitei o cadastro de categoria :)")

        clearForm()
      }}>
        <FormFiled
          label='Nome da Categoria'
          type= 'texto'
          name = 'titulo'
          value={valores.titulo}
          onChange={handleChange}
          suggestion={
            []
          }
        />

        <FormFiled
          label='Descrição'
          type= 'textarea'
          name = 'descricao'
          value={valores.descricao}
          onChange={handleChange}
          suggestion={
            []
          }
        />

        <FormFiled
          label='Cor'
          type= 'color'
          name = 'cor'
          value={valores.cor}
          onChange={handleChange}
          suggestion={
            []
          }
        />


        <Button className="ButtonLink" type="submit">
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 &&(
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria)=>{
          return(
            <li key={`${categoria.titulo}`}>
              {categoria.titulo}
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