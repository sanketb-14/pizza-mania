import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className="m-2 ">
      <Link to="/menu" className="btn btn-sm sm:btn-md m-2 btn-accent">&larr; Back to menu</Link>

      <p className='text-xl sm:text-3xl font-semibold sm:font-bold text-primary'>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
