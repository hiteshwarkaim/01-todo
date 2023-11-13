import FoodItem from "./FoodItem";
import ErrorMessage from "./ErrorMessage";

function App() {
  const fruits=['Apple','Mango','Banana','Grapes']

  return (
   <>
      <h1>Food Card</h1>
      <FoodItem items={fruits}/>
      <ErrorMessage items={fruits}/>
    </>
  )
}

export default App
