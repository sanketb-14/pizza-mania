import { useNavigate,useRouteError } from 'react-router-dom';
import Error from '../assets/error.svg'

function NotFound() {
  const navigate = useNavigate();
  const error = useRouteError()

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${Error})`,
        }}
      >
        <div className="hero-overlay bg-opacity-20 text-secondary"></div>
        <div className="hero-content text-center ">
          <div className="max-w-md">
            <h1 className="mb-2 sm:mb-5 text-3xl sm:text-5xl font-bold">
              Something went wrong 😢
            </h1>
            <p className="text-lg sm:text-xl py-4 sm:py-8 text-red-600">{error.data || error.message}</p>

            <button onClick={() => navigate(-1)} className="btn btn-sm sm:btn-md btn-primary">
              &larr; Go back
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default NotFound;
