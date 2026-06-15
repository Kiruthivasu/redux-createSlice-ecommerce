import { useSelector, useDispatch } from "react-redux";

import { removeFromCart } 
from "../features/cart/cartSlice";


export default function Cart(){


const {items,total}=useSelector(
state=>state.cart
);


const dispatch=useDispatch();


return(

<div className="cart">


<h2>🛒 Cart</h2>


{
items.length===0 ?

<h3>Cart Empty</h3>

:

items.map(item=>(

<div className="cart-item" key={item.id}>


<h3>{item.name}</h3>

<p>₹{item.price}</p>


<button

className="remove"

onClick={()=>
dispatch(removeFromCart(item.id))
}

>

Remove

</button>


</div>

))
}


<h3>
Total: ₹{total}
</h3>


</div>

)

}
