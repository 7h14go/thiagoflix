import React, {useEffect, useState} from 'react'
import{ Link, useHistory } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormFiled from '../../../components/FormFiled'
import Button from '../../../components/Button';
import videosRepsitory from '../../../repositories/videos'
import categoriasRepsitory from '../../../repositories/categorias'

function CadastroVideo(){

  const valoresIniciais ={
    titulo:'',
    url:'',
    categoria: ''

  }
  const history = useHistory()
  const [categorias, setCategorias] = useState([])
  const { handleChange, valores} = useForm(valoresIniciais) 
  const categoriaTitulo = categorias.map(({ titulo }) => titulo)

  useEffect(()=> {
    categoriasRepsitory.getAllCategorias().then((categoriasFromServer)=>{
      setCategorias(categoriasFromServer)
    })
  }, [])

    return(
      <PageDefault>
        <h1>Cadastro de video</h1>

        <form onSubmit = { (event) => {
          event.preventDefault();
          
          const categoriaEscolhida = categorias.find((categoria) => {
            return categoria.titulo === valores.categoria;
          })

          //Descomentar até o alert para habilitar o cadastro de videos
          //   videosRepsitory.createVideos({
          //   titulo: valores.titulo,
          //   url: valores.url,
          //   categoriaId: categoriaEscolhida.id
          // })
          //   .then( () => {
          //     history.push('/')
          //   })

          alert("Foi mal, desabilitei o cadastro de videos :)")

        } } >
          <FormFiled
            label='Título do video'
            type= 'texto'
            name = 'titulo'
            value={valores.titulo}
            onChange={handleChange}
            suggestion={
              []
            }
          />

          <FormFiled
            label='URL'
            type= 'texto'
            name = 'url'
            value={valores.url}
            onChange={handleChange}
            suggestion={
              []
            }
          />

          <FormFiled
            label='Categoria'
            type= 'datalist'
            name = 'categoria'
            value={valores.categoria}
            onChange={handleChange}
            suggestion={categoriaTitulo}
          />

          <Button className="ButtonLink" type="submit" >
            Cadastrar
          </Button>

        </form>
        
        <div style={{marginTop: 4 + '%'}}>
          <Link to="/cadastro/categoria">          
            Cadastrar Categoria
          </Link>
        </div>

      </PageDefault>      
    )
  }

  export default CadastroVideo;