import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Dashboard } from "../pages/dashboard";
import { Register } from "../pages/register";
import { Login } from "../pages/login";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
