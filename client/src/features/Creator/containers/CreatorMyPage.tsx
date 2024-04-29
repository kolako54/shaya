import { Outlet } from "react-router-dom";

import { CreatorHeader } from "../components/CreatorHeader";

export const CreatorMyPage = () => {
  return (
    <div>
      <CreatorHeader />
      <div className="mt-16">
        <Outlet />
      </div>
    </div>
  );
};
