import Item from "../Item/Item";

function ItemList({ productos }) {

  
  return (
    <div className="card">
      {
      productos.map((productos) => (
        <Item data={productos} key={productos.id} />
      ))}
    </div>
  );
}

export default ItemList;