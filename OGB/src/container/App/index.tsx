import { Outlet } from "react-router";
import TopBar from "../../components/shared/Topbar";
import LeftSideBar from "../../components/shared/leftSideBar";

const Container = () => {
  return (
    <>
      <TopBar />
      <div className="flex">
        <LeftSideBar />
        <main className="w-full p-4 pt-32 pl-60">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Container;
