import { Route, Routes } from "react-router-dom";

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
          {/* <div>This is going to implement landing page</div> */}
        </Routes>
      </div>
    </>
  );
};

export default App;
