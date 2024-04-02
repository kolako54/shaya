import { Route, Routes } from "react-router-dom";

import { Collection } from "./features/Creator-dashboard/components/Collection";
import { Home } from "./features/Creator-dashboard/components/Home";
import { CreatorPage } from "./features/Creator-dashboard/containers/CreatorPage";
import { Login } from "./features/Form/components/Login";
import { Signup } from "./features/Form/components/Signup";
import { AuthLayout } from "./features/Form/containers/AuthLayout";
import { HomePage } from "./features/landing-page/containers/HomePage";
import { Navbar } from "./features/Navbar/components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/creator" element={<CreatorPage />}>
          <Route path="/creator" element={<Home />} />
          <Route path="/creator/home" element={<Home />} />
          <Route path="/creator/collection" element={<Collection />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
