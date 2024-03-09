import { Outlet } from "react-router-dom";

import { CreatorHeader } from "../components/CreatorHeader";
import { CreatorSidebar } from "../components/CreatorSidebar";

export const CreatorPage = () => {
  return (
    <div className="min-h-screen sm:flex sm:overflow-x-clip ">
      <div className="grow">
        <CreatorHeader />
        <div className="mt-12">
          <Outlet />
        </div>
      </div>
      <CreatorSidebar />
    </div>
  );
};
