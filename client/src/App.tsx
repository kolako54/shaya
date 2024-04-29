import { Route, Routes } from "react-router-dom";

import { CreatorLayout } from "./features/Creator/containers/CreatorLayout";
import { CreatorMyPage } from "./features/Creator/containers/CreatorMyPage";
import {
  AboutMe,
  Collection,
  Home,
  Membership,
  Shop,
} from "./features/Creator/pages";
import { Login } from "./features/Form/components/Login";
import { Signup } from "./features/Form/components/Signup";
import { AuthLayout } from "./features/Form/containers/AuthLayout";
import { RootLayout } from "./features/Root/containers/RootLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />} />

      <Route element={<AuthLayout />}>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Route>

      {/* Creator Routes */}
      <Route element={<CreatorLayout />}>
        <Route path="/creator" element={<CreatorMyPage />}>
          <Route index element={<Home />} />
          <Route path="/creator/collection" element={<Collection />} />
          <Route path="/creator/shop" element={<Shop />} />
          <Route path="/creator/membership" element={<Membership />} />
          <Route path="/creator/about" element={<AboutMe />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
