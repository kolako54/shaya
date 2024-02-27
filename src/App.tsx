import { Route, Routes } from "react-router-dom";

import { HomePage } from "./features/landing-page/containers/HomePage";
import { Navbar } from "./features/Navbar/components/Navbar";
import { LoginPage } from "./features/signup/containers/LoginPage";
import { SignupPage } from "./features/signup/containers/SignupPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default App;
