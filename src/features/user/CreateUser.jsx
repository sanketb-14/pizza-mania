import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    if(!username) return
    dispatch(updateName(username))
    navigate('/menu')
  }

  return (
    <div className="card shrink-0 w-full sm:w-1/2 max-w-sm  bg-slate-200 bg-opacity-80">
      <form
        className="card-body text-orange-700 text-normal sm:text-xl font-semibold sm:font-bold "
        onSubmit={handleSubmit}
      >
        <p className="py-1 sm:py-8">
          👋 Welcome! Please start by telling us your name:
        </p>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-primary  font-semibold sm:font-bold text-normal sm:text-xl">
              Full Name
            </span>
          </label>
          <input
            type="text"
            className="input input-sm sm:input-lg input-bordered"
            placeholder="Your full name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-sm sm:btn-lg btn-primary">Start Ordering...</button>
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
