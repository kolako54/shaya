
import { Route, Routes } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { SignupPage } from "./pages/SignupPage";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-bgPrimary">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
