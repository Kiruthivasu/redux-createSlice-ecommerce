import Products from "./components/Products";
import Cart from "./components/Cart";
import "./App.css";


export default function App(){

return(

<div className="container">

<h1>🛒 Redux Toolkit Ecommerce</h1>

<Products />

<Cart />

</div>

)

}