const ErrorMessage=()=>{

  const fruits=['Apple','Mango','Banana','Grapes'];
  return(
    <>
      {fruits.length===0 ? <h3>Cart is empty !</h3>:null}
    </>
  );
}

export default ErrorMessage;