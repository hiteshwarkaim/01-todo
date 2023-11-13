
function App() {

  const fruits=['Apple','Mango','Banana','Grapes'];
  // const fruits=[];

  if(fruits.length===0){
    return <h3>Cart is empty !</h3>
  }
  return (
   <>
      <h1>Food Card</h1>
      {fruits.length===0 ? <h3>Cart is empty !</h3> : null}
      <ul className="list-group">
         { fruits.map( (fruit)=>(
              <li className="list-group-item" key={fruit}>{fruit}</li>
              )
            )  
        }
      </ul>
    </>
  )
}

export default App
