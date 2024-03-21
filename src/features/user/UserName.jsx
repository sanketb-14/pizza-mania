import { useSelector } from "react-redux"


function UserName() {
  const userName = useSelector(state => state.user.username)
  if(!userName) {return null}
  return (
    <div className="hidden md:block text-xl mx-4 font-bold ">
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] text-primary text-lg font-semibold p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between">
              {userName}
              <span className="badge">New</span>
            </a>
          </li>
          
          <li className="btn btn-sm my-4 btn-error">
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserName