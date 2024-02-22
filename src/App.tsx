import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-bgPrimary">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" index element={<Footer />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
