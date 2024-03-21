import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';

function DeleteBtn({ pizzaId }) {
  const dispatch = useDispatch()
  return (
    <button
      className="btn btn-xs sm:btn-sm  btn-error mx-0 sm:mx-1"
      onClick={() => dispatch(deleteItem(pizzaId))}
    >
      x
    </button>
  );
}

export default DeleteBtn;
