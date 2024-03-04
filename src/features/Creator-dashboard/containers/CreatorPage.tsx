import { CreatorHeader } from "../components/CreatorHeader";
import { CreatorSidebar } from "../components/CreatorSidebar";

export const CreatorPage = () => {
  return (
    <div className=" h-[100dvh] sm:flex sm:overflow-x-clip">
      <CreatorHeader />
      <CreatorSidebar />
    </div>
  );
};
