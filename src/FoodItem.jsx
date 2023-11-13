const FoodItem=()=>{

  const fruits=['Apple','Mango','Banana','Grapes'];
  return(
    <ul className="list-group">
    { fruits.map( (fruit)=>(
         <li className="list-group-item" key={fruit}>{fruit}</li>
         )
       )  
   }
 </ul>

  );
}

export default FoodItem;