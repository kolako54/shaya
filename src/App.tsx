import { Route, Routes } from "react-router-dom";

import { Collection } from "./features/Creator-dashboard/components/Collection";
import { Home } from "./features/Creator-dashboard/components/Home";
import { CreatorPage } from "./features/Creator-dashboard/containers/CreatorPage";
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
        <Route path="/creator" element={<CreatorPage />}>
          <Route path="/creator/home" element={<Home />} />
          <Route path="/creator/collection" element={<Collection />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
