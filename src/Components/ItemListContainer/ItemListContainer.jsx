import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { gFetch } from "../../utils/gFetch"
import ItemList from "..//ItemList/ItemList";


export const ItemListContainer = ({ saludo }) => {
  const [ productos, setProductos ] = useState([])
  const [ loading, setLoading ] = useState(true)

  const { idCategoria } = useParams()

  useEffect(()=>{
    if (idCategoria) {
      gFetch()
        .then(res => {      
          setProductos(res.filter(producto => producto.categoria === idCategoria))
          // debe hacer una sola cosa
        })
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))      
    } else {
      gFetch()
        .then(res => {      
          setProductos(res)
          // debe hacer una sola cosa
        })
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
      
    }
  }, [idCategoria])

 


  console.log(idCategoria)

  return (
    
         loading 
          ? 
            <h2>Cargando...</h2> 
          : 
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            padding: 50
          }} >
           { productos.map(producto =>   (
                <div key={producto.id} className='card w-25 mt-2' >
                  <Link to={`/detalle/${producto.id}`}>
                    <div className='card-header'>
                      Nombre: {producto.name}
                    </div>
                    <div className='card-body'>
                      <img src={producto.foto} alt='foto' className="w-100"/>
                      Categoria: {producto.categoria}<br/>
                      Precio: {producto.price}
                    </div>
                    <div className='card-footer'>
                    </div>
                  </Link>


                </div>
              )
            )}
{/* 
            <ItemList data={productos} /> */}
            </div>

            

          

  )
}
export default ItemListContainer