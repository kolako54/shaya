import { Carousel } from "@/components/ui/carousel";

import Footer from "../components/Footer";
import { Header } from "../components/Header";
import { HeaderSearch } from "../components/HeaderSearch";
import { MainHome } from "../components/MainHome";

export const HomePage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <HeaderSearch />
        <MainHome />
        <Carousel />
        {/* Cardbox  */}
      </div>
      <Footer />
    </>
  );
};
