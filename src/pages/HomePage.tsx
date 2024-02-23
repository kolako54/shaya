import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeaderSearch } from "@/components/HeaderSearch";

export const HomePage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <HeaderSearch />
      </div>
      <Footer />
    </>
  );
};
