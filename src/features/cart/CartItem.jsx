
import { formatCurrency } from "../../utils/helpers";
import DeleteBtn from "./DeleteBtn";
import UpdateQnt from "./updateQnt";

function CartItem({ item }) {
 
  const { pizzaId, name, quantity, totalPrice,imageUrl } = item;

  return (
    <li className=" border-b-2 flex  p-2 sm:p-4 border-accent text-primary text-xs sm:text-lg font-normal sm:font-semibold justify-center items-center">
      <img src={imageUrl} alt={name} className="w-12 h-12 shadow-xl sm:w-24 sm:h-24 rounded-xl mx-1 sm:mx-4" />
      <p>
        {quantity}&times; {name}
      </p>
      <div >
        <p>{formatCurrency(totalPrice)}</p>
      </div>
      <UpdateQnt pizzaId={pizzaId}/>
     <DeleteBtn pizzaId={pizzaId}/>
    </li>
  );
}

export default CartItem;
