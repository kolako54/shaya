import { Route, Routes } from "react-router-dom";

import { HomePage } from "./features/Landing-page/containers/HomePage";
import { Navbar } from "./features/Navbar/components/Navbar";
import { LoginPage } from "./features/Signup/containers/LoginPage";
import { SignupPage } from "./features/Signup/containers/SignupPage";

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
