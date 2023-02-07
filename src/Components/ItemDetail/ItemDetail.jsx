
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'



function ItemDetail ( { prod } ) { 
  return (
      <>
      <div>
            <div>
            <div>
               <h3>{prod.name}</h3>
               <img src={prod.foto} alt={prod.id}/>
               <p>${prod.price}</p>
                  <ItemCount />     
            </div>
            </div>
      </div>
  
     

      </>
  )
}

export default ItemDetail
