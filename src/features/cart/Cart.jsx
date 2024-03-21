import { Link } from 'react-router-dom';
import pizzaBg from '../../assets/bg-pizza.jpg';
import { FaShoppingCart } from 'react-icons/fa';
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';
import EmptyCart from './EmptyCart';


// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: 'Vegetale',
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: 'Spinach and Mushroom',
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  const cart = useSelector(getCart)
 
  const userName = useSelector(state => state.user.username)
  const dispatch = useDispatch()

  if(!cart.length) return<EmptyCart/>
  // const cart = fakeCart;

  return (
    <div className=" flex card w-full justify-start  min-h-screen  ">
      <img
        src={pizzaBg}
        alt="pizza Mania"
        className="absolute z-0 bg-cover min-h-screen opacity-30"
      />

      <div className="card-body m-1 sm:m-5 w-full sm:w-1/2  items- rounded-xl  absolute z-1 ">
        <Link
          className="link text-lg sm:text-xl text-primary font-semibold "
          to="/menu"
        >
          &larr; Back to menu
        </Link>

        <h2 className="card-title text-accent font-semibold sm:font-bold my-2 sm:my-4 ">
          <FaShoppingCart />
          Your cart, {userName}
        </h2>

        <ul className="">
          {cart.map((item) => (<CartItem item={item} key={item.pizzaId}/>))}

        </ul>


        <div className="flex w-full justify-evenly  ">
          <Link
            className="btn btn-sm sm:btn-md my-2 sm:my-4 btn-primary"
            to="/order/new"
          >
            Order pizzas
          </Link>
          <button className="btn btn-sm sm:btn-md my-2 sm:my-4 btn-error" onClick={()=>{dispatch(clearCart())}}>
            Clear cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
