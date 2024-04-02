import { Navbar } from "@/features/Navbar/components/Navbar";

import CarouselPic from "../components/CarouselPic";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import { HeaderSearch } from "../components/HeaderSearch";
import { MainHome } from "../components/MainHome";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="container">
        <HeaderSearch />
        <MainHome />
        <CarouselPic />
        {/* Cardbox  */}
      </div>
      <Footer />
    </>
  );
};
