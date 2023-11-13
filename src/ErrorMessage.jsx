const ErrorMessage=( {items} )=>{

  return(
    <>
      {items.length===0 ? <h3>Cart is empty !</h3>:null}
    </>
  );
}

export default ErrorMessage;