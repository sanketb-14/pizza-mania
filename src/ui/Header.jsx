import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/UserName';
import CartOverview from '../features/cart/CartOverview';

function Header() {
  return (
    <header className="w-full  h-24 flex-row  navbar flex justify-start bg-opacity-80 bg-primary   text-primary-content border-b-4 border-primary min-h-2">
      <div className="w-1/2 flex flex-col sm:flex-row justify-start">
        <Link to="/">
          <img
            src={Logo}
            alt=""
            className="object-cover h-auto w-12 sm:w-16 mx-1 sm:mx-4"
          />
        </Link>
        <Link
          className="border-l-2 sm:border-l-4 border-primary p-1 sm:p-2 tracking-wide sm:tracking-widest   text-l sm:text-2xl uppercase font-bold hidden sm:inline-block  "
          to="/"
        >
          Pizza-mania
        </Link>
      </div>

      <SearchOrder />
      <CartOverview />
      <UserName />
    </header>
  );
}

export default Header;
