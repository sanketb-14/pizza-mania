import { useDispatch, useSelector } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';
import { addItem, getCurrQntById } from '../cart/cartSlice';
import DeleteBtn from '../cart/DeleteBtn';
import UpdateQnt from '../cart/updateQnt';
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currQnt = useSelector(getCurrQntById(id));
  const isInCart = currQnt > 0;

  const dispatch = useDispatch();
  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      imageUrl,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className=" flex bg-base-100 rounded-xl shadow-xl my-3 mx-1">
      <img
        className={`rounded-xl w-40 m-1 ${soldOut ? 'opacity-50 grayscale' : ''}`}
        src={imageUrl}
        alt={name}
      />
      <div className="m-2  flex flex-col justify-center text-sm sm:text-normal grow">
        <p className="uppercase text-primary font-semibold sm:font-bold">
          {name}
        </p>
        <p className="italic capitalize">{ingredients.join(', ')}</p>
        <div className="mt-auto flex justify-between">
          {!soldOut ? (
            <p className="text-primary-focus font-semibold sm:font-bold text-lg sm:text-xl">
              {formatCurrency(unitPrice)}
            </p>
          ) : (
            <p className="text-error font-semibold sm:font-bold text-lg sm:text-xl">
              Sold out
            </p>
          )}
          {isInCart && <UpdateQnt pizzaId={id}/>}
          {!soldOut && !isInCart && (
            <button
              className="btn btn-xs  sm:btn-sm btn-primary uppercase"
              onClick={handleAddToCart}
            >
              {' '}
              add to Cart
            </button>
          )}
          {isInCart && <DeleteBtn pizzaId={id} />}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
