"use client";

import React, { useEffect } from 'react';
import { Navbar } from './(components)/Navbar';
import Sidebar from './(components)/Sidebar';
import StoreProvider, { useAppSelector } from '@/app/redux';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);
  const isDarkMode=useAppSelector((state)=>state.global.isDarkMode);
  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add("dark");
      console.log("D")
    }else{
      document.documentElement.classList.add("light");
      console.log("DL")
    }
  },[isDarkMode])
  return (
    <div className={`${isDarkMode ? "dark":"light"} bg-gray-50 text-gray-900 w-full min-h-screen flex`}>
      <Sidebar />
      <main className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 ${isSidebarCollapsed ? "md:pl-24" : "md:pl-72"}`}>
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>
        {children}
      </DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;
