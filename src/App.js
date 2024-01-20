import React, { useEffect } from "react";
import AllRoutes from "./routes/AllRoutes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./App.css";
import { useLocation } from "react-router-dom";

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}
