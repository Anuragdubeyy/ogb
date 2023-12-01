import { Outlet } from "react-router";
import TopBar from "../../components/shared/Topbar"
import LeftSideBar from "../../components/shared/leftSideBar";

const Container =() =>{
    return(
        <>
        <TopBar/>
        <div className="flex">
        <LeftSideBar/>
        <main className="w-full  pt-11 p-5 overflow-x-scroll">
          <Outlet />
        </main>
        </div>


        </>
    )
}

export default Container;