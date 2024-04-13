import { Outlet } from "react-router-dom";

import { CreatorSidebar } from "../components/CreatorSidebar";

export const CreatorLayout = () => {
  return (
    <div className="min-h-screen sm:overflow-x-clip ">
      <CreatorSidebar />
      <div className="sm:w-4/5">
        <Outlet />
      </div>
    </div>
  );
};
