import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  function handleSubmit(e) {
    e.preventDefault();

    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit} className="w-full sm:max-w-96 mx-1 sm:mx-2">
      <label className="flex justify-evenly input input-sm text-normal sm:text-lg sm:input-md w-full  items-center gap-1 ">
        <input
          className="text-slate-500/50"
          placeholder="Search order here..."
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 sm:w-8 sm:h-8 text-primary"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </form>
  );
}

export default SearchOrder;
