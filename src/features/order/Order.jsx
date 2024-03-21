// Test ID: IIDSAT
import { useFetcher, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import pizzaBg from '../../assets/bg-pizza.jpg'
import OrderItem from './OrderItem'
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { useEffect } from "react";



function Order() {
  
  const order = useLoaderData()
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  const fetcher = useFetcher()

  useEffect(function(){
    if(!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu')

  },[fetcher])
 

  return (
    <div className="flex hero min-h-screen justify-center flex-col items-center mt-4 sm:mt-16 ">
      <div
        className="absolute  inset-40"

      
      >
        <img src={pizzaBg} alt="" className="opacity-50 bg-auto " />
      </div>
      <div className="card w-full sm:w-2/3  ">
        <div className="card-body">
          <h2 className="text-normal w-full sm:text-lg font-semibold flex justify-between text-primary">
            Order # {id} status:-
            <span className="btn btn-sm sm:btn-md text-white  bg-red-600 uppercase">
              {' '}
              priority:-
              {priority && (
                <span className="text-white  btn btn-sm bg-green-600   text-sm sm:text-lg ">
                  {status}
                </span>
              )}
            </span>
          </h2>

          <div className="cartblock">
            <p className="text-base sm:text-lg text-primary font-normal sm:font-semibold">
              {deliveryIn >= 0
                ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
                : 'Order should have arrived'}
            </p>

            <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {cart.map((item) => (
              <OrderItem
                item={item}
                isLoadingIngredients={fetcher.state === 'loading'}
                ingredients={fetcher?.data?.find(el => el.id === item.pizzaId)?.ingredients ?? []}
                
                key={item.pizzaId}
              />
            ))}
          </ul>
          <div className="cartblock text-accent">
            <p className="">Price pizza: {formatCurrency(orderPrice)}</p>
            {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
            <p className="text-primary text-lg sm:text-xl font-semibold sm:font-bold">
              To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export async function loader({params}){
  const order = await getOrder(params.orderId)
  return order

}

export default Order;
