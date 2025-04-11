import { ReactNode } from "react";

import { Outlet } from "react-router";

import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";

function RootLayuots(): ReactNode {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default RootLayuots;
