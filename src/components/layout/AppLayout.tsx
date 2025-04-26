
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import BottomNav from "./BottomNav";

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NavBar />
      <main className="flex-1 pb-16 pt-16 container max-w-md mx-auto">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};

export default AppLayout;
