import { Route, Routes } from "react-router-dom";

import { Home } from "./features/Creator-dashboard/components/Home";
import { CreatorPage } from "./features/Creator-dashboard/containers/CreatorPage";
import { Login } from "./features/Form/components/Login";
import { Signup } from "./features/Form/components/Signup";
import { AuthLayout } from "./features/Form/containers/AuthLayout";
import { HomePage } from "./features/landing-page/containers/HomePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<AuthLayout />}>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<CreatorPage />}>
        <Route path="/creator" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
