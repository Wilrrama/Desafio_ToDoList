import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Dashboard } from "../pages/dashboard";
import { Register } from "../pages/register";
import { Login } from "../pages/login";
import { PrivatesRoutes } from "./PrivateRoutes";
import { PublicsRoutes } from "./PublicRoutes";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PublicsRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route element={<PrivatesRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
