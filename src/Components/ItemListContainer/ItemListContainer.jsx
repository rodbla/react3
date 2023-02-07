import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { gFetch } from "../../utils/gFetch"


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


  // [1,2,3,4] -> [ <li>{1}</li>, <li>{2}</li>, ....]
  return (
    
         loading 
          ? 
            <h2>Cargando...</h2> 
          : 
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
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
                        {/* <button className="btn btn-outline-primary w-100">Detalle</button> */}
                    </div>
                  </Link>
                  {/* <ItemList data={data} /> */}

                </div>
              )
            )}

            
          </div>
          
    
    // <h1>
    // </h1>
  )
}
export default ItemListContainer