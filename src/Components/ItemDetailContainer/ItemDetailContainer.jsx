import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch, gFetchOne } from "../../utils/gFetch"

import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
    const [ producto, setProducto ] =  useState({})
    const { idProducto } = useParams()
    // console.log(idProducto)

    useEffect(()=>{        
        gFetchOne(idProducto)
        .then(response => setProducto(response))
        .catch(error => setProducto(error))
    }, [])

  // mocks con id 
    return (
        <div 
        // className="border border-5 border-danger  m-3"
        >        
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer

