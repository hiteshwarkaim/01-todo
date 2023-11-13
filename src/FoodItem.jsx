import Item from "./Item";

const FoodItem=({items})=>{
  
  return(
    <ul className="list-group">
    { items.map( item => ( <Item key={item} foods={item} /> ) )  }
 </ul>

  );
}

export default FoodItem;