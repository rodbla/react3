import {Link} from 'react-router-dom'



const Item = ( { productos } ) =>{

    

    return (
            <>

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


            </>
                  
        
    ) 
}


export default Item;