import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
  const { idProducto } = useParams()
  console.log(idProducto)

  return (
    <div 

    >
     
      {/* <ItemDetail data={idProducto}/> */}
    </div>
  )
}

export default ItemDetailContainer
