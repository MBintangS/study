import React, { useState } from "react";
import Sidebar from "../../components/admin/layouts/Sidebar";
import {
  HiArrowRightStartOnRectangle,
  HiBars3BottomLeft,
  HiOutlineCalendar,
  HiOutlineChartBar,
  HiOutlineFolder,
  HiOutlineHome,
  HiOutlineInbox,
  HiOutlineUser,
  HiXMark,
} from "react-icons/hi2";

const navigation = [
  { name: "Dashboard", icon: HiOutlineHome, current: true },
  { name: "Team", icon: HiOutlineUser, current: false },
  { name: "Projects", icon: HiOutlineFolder, current: false },
  { name: "Calendar", icon: HiOutlineCalendar, current: false },
  { name: "Documents", icon: HiOutlineInbox, current: false },
  { name: "Reports", icon: HiOutlineChartBar, current: false },
];

const Dashboard = () => {
  const [mainContent, setMainContent] = useState("Dashboard");

  // Handler untuk menangani klik pada menu sidebar
  const handleMenuClick = (menu) => {
    setMainContent(menu);
  };

  return (
    <div className="flex w-screen">
      <Sidebar navigation={navigation} onMenuClick={handleMenuClick}>
      <main className="flex-1">
        <div className="py-6">
          {/* <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div> */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <div className="py-4">
              <h1 className="text-2xl font-semibold">{mainContent}</h1>
              <div className="mt-4">
                {mainContent === "Dashboard" && (
                  <p>Ini adalah konten Dashboard</p>
                )}
                {mainContent === "Team" && <p>Ini adalah konten Team</p>}
                {mainContent === "Projects" && (
                  <p>Ini adalah konten Projects</p>
                )}
                {mainContent === "Calendar" && (
                  <p>Ini adalah konten Calendar</p>
                )}
                {mainContent === "Documents" && (
                  <p>Ini adalah konten Documents</p>
                )}
                {mainContent === "Reports" && <p>Ini adalah konten Reports</p>}
              </div>
            </div>
          </div>
        </div>
      </main>
      </Sidebar>
      
    </div>
  );
};

export default Dashboard;
