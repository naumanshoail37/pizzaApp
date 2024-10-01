function Cart() {
    return (
      <div className='cart'>
     {/* Cart */}
   <div className='cart mt-10'>
   <h2 className='text-[30px] font-bold'>Cart</h2>
   {Cart.length === 0 ? (
       <p>Your cart is empty</p>
   ) : (
       <ul className='list-none'>
           {Cart.map((Prices, index) => (
               <li key={index} className='border-b-2 pb-2'>
                   {pizza.name} - ${pizza.price.toFixed(2)}
               </li>
           ))}
       </ul>
        
   )}
  
  </div>
  
  
  </div>
    )
  }
  
  export default Cart