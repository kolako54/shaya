import { Outlet } from "react-router-dom";

import { CreatorSidebar } from "../components/CreatorSidebar";

export const CreatorPage = () => {
  return (
    <>
      <CreatorSidebar />
      <Outlet />
    </>
  );
};
