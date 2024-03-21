import { useState } from 'react';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import pizzaBg from '../../assets/bg-pizza.jpg'
import { createOrder } from '../../services/apiRestaurant';
import  {useDispatch, useSelector}  from 'react-redux';
import { getCart, getTotalPrice } from '../cart/cartSlice';
import EmptyCart from '../cart/EmptyCart';
import store from '../../store'
import { clearCart } from '../cart/cartSlice';
import { formatCurrency } from '../../utils/helpers';
import { fetchAddress } from '../user/userSlice';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );


function CreateOrder() {
  const navigation = useNavigation();
   const [withPriority, setWithPriority] = useState(false);
 
  const isSubmitted = navigation.state === 'submitting';
  const formErrors = useActionData();
  const {username,status:addressStatus , position , address } = useSelector((state) => state.user);

  const isLoadingAddress = addressStatus === 'loading'
  const cart = useSelector(getCart)
  const totalCartPrice = useSelector(getTotalPrice)
  const priorityPrice = withPriority ? totalCartPrice * 0.25 : 0
  const totalPrice = priorityPrice + totalCartPrice
  const dispatch = useDispatch()

  if(!cart.length) return (<EmptyCart/>)

 
 

  return (
    <div className="m-2 flex flex-col sm:flex-row  border-2 border-y-accent w-full   shadow-xl bg-base-100 text-lg font-semibold sm:text-xl  sm:font-bold">
      <Form
        method="POST"
        className="card-body rounded-2xl mx-4 bg-slate-200/25 text-base w-full sm:w-1/2 sm:text-lg  font-normal sm:font-medium text-primary "
      >
        <h2 className=" my-1 sm:my-3 text-normal sm:text-lg text-center underline tracking-wide text-accent ">
          Ready to order? Let's go!
        </h2>
        <div className="">
          <label>Full Name</label>
          <input className="myinput" defaultValue={username}type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required className="myinput" />
          </div>
          {formErrors?.phone && <p className='text-error'>{formErrors.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" defaultValue={address} disabled={isLoadingAddress}required className="myinput" />
          </div>
          <button className="btn btn-sm btn-primary m-1" disabled={isLoadingAddress} onClick={(e)=>{
            e.preventDefault()
            dispatch(fetchAddress())}}>get position</button>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label
            htmlFor="priority"
            className=" text-sm tracking-normal sm:tracking-wider px-2 text-accent"
          >
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button
            disabled={isSubmitted}
            className="btn w-full btn-sm sm:btn-md btn-primary text-normal sm:text-lg"
          >
            {isSubmitted ? 'placing order...' : `Order now at ${formatCurrency(totalPrice)}`}
          </button>
        </div>
      </Form>
      <img className="h-screen w-full sm:w-1/2" src={pizzaBg} alt="pizza mania" />
    </div>
  );
}
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };
  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone =
      'we require correct phone no for placing order , please provide correct phone number..';
  }
  if (Object.keys(errors).length > 0) return errors;
  const newOrder = await createOrder(order);

  store.dispatch(clearCart())

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
