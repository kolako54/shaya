import { Navigate, Outlet } from "react-router-dom";

export const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <div>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <section className="mx-auto w-3/4 sm:w-2/4 ">
          <Outlet />
        </section>
      )}
    </div>
  );
};
