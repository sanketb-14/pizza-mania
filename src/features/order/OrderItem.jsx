import { formatCurrency } from "../../utils/helpers";
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;
  

  return (
    <li className="bg-base-100 m-2 sm:m-4  shadow-xl p-2  sm:p-4 border-r-2 border-primary">
      <div className="flex  justify-center ">
        <p className="text-base sm:text-lg font-normal sm:font-semibold text-primary">
          <span className="text-accent ">{quantity}&times;</span> {name}
        </p>
        <p className="border-b-2 w-1/4 max-w-20 text-center border-accent">
          {formatCurrency(totalPrice)}
        </p>
      </div>
      <p className="text-xs sm:text-sm italic uppercase text-accent my-1 sm:my-3">
        {isLoadingIngredients
          ? 'loading ingredients...'
          : ingredients.join(', ')}
      </p>
    </li>
  );
}

export default OrderItem;
