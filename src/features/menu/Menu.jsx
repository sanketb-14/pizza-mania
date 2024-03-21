import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem"
function Menu() {
  const menu = useLoaderData()
 
  return (
    <ul className="w-full m-2 sm:mx-40 grid grid-cols-1 sm:grid-cols-2 grid-flow-rows gap-4 shadow-xl bg-slate-200/20 ">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function Loader(){
  const menu =await getMenu();
  return menu
}

export default Menu;
