import Header from "./Header"
import Loader from "./Loader"


import { Outlet, useNavigation } from "react-router-dom"


function AppLayout() {
  const navigation = useNavigation()
 
  const isLoading = navigation.state === "loading"
  return (
    <div className="grid h-screen grid-row-[auto_1fr_auto]  ">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scroll">
        <main className=" flex justify-center  ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout