import landing from '../assets/landing.svg'
import { Link } from 'react-router-dom';
import CreateUser from '../features/user/CreateUser';
import { useSelector } from 'react-redux';

function Home() {
  const userName = useSelector(state => state.user.username)
  return (
    <div
      className="hero min-h-screen w-screen  h-auto "
      style={{
        backgroundImage: `url(${landing})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="hero-content flex flex-col sm:flex-row text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-2 sm:mb-5 text-2xl sm:text-6xl font-semibold sm:font-bold text-orange-600 ">
            The best pizzaa..
          </h1>
          <p className="mb-2 sm:mb-5 font-normal sm:font-semibold uppercase tracking-wide sm:tracking-widest text-xl sm:text-3xl text-rose-500">
            Straight out of the Oven , straight to you
          </p>
          {userName && (
            <button className="btn btn-sm sm:btn-lg bg-orange-600 text-white border-0 uppercase">
              <Link to="/menu">{userName} , Continue ordering </Link>
            </button>
          )}
        </div>
        {!userName && <CreateUser />}
      </div>
    </div>
  );
}

export default Home;
