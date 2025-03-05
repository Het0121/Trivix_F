import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AppLayouts from "./layouts/AppLayouts";
import AppRouter from "./Router";
import AuthLayout from "./layouts/Authlayout";
import ProtectedRoute from "./MiddleWare/ProtectedRoutes";

function LayoutWrapper() {
  const location = useLocation();
  const isAuthRoute = location.pathname.startsWith("/auth");
  const publicRoutes = ["/auth/login", "/auth/signup", "/forgot-pass"];
  return isAuthRoute ? (
    <AuthLayout>
      <AppRouter />
    </AuthLayout>
  ) : (
    <ProtectedRoute publicRoutes={publicRoutes}>
      <AppLayouts>
        <AppRouter />
      </AppLayouts>
    </ProtectedRoute>
  );
}
function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}
export default App;
