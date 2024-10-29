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
  { name: "Dashboard", icon: HiOutlineHome, current: false },
  { name: "Team", icon: HiOutlineUser, current: true },
  { name: "Projects", icon: HiOutlineFolder, current: false },
  { name: "Calendar", icon: HiOutlineCalendar, current: false },
  { name: "Documents", icon: HiOutlineInbox, current: false },
  { name: "Reports", icon: HiOutlineChartBar, current: false },
];
const userNavigation = [
  { name: "Sign out", href: "/logout" },
];

const Dashboard = () => {

  return (
    <Sidebar navigation={navigation} userNavigation={userNavigation}>
      <div className="p-4">
        <h1>Main Content</h1>
        <p>This is the content passed as children to the Sidebar component.</p>
      </div>
    </Sidebar>
  );
};

export default Dashboard;
