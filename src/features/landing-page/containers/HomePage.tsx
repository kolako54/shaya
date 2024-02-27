import Carousel from "@/features/landing-page/components/CarouselPic";
import Footer from "@/features/landing-page/components/Footer";
import { HeaderSearch } from "@/features/landing-page/components/HeaderSearch";
import { MainHome } from "@/features/landing-page/components/MainHome";

import { Header } from "../components/Header";

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
