import { useDispatch, useSelector } from 'react-redux';
import { decreaseItemQuantity, getCurrQntById, increaseItemQuantity } from './cartSlice';

function updateQnt({ pizzaId }) {
  const dispatch = useDispatch();
  const qnt = useSelector(getCurrQntById(pizzaId))
  return (
    <div className="flex mx-2 sm:mx-4 ">
      <button
        className="btn btn-xs sm:btn-sm btn-secondary mx-0 sm:mx-1  "
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </button>
      <p className='font-semibold text-primary text-lg mx-1'>{qnt}</p>
      <button
        className="btn btn-xs sm:btn-sm btn-secondary mx-0 sm:mx-1 "
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </button>
    </div>
  );
}

export default updateQnt;
