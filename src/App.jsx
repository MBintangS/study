import { Route, Routes } from "react-router-dom";
import ResultPrograms from "./pages/ResultPrograms.jsx";
import CampusUpdate from "./pages/CampusUpdate.jsx";
import Sidebar_copy from "./components/admin/layouts/Sidebar-copy.jsx"
import Sidebar from "./components/admin/layouts/Sidebar.jsx"
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/search/:userInput" element={<ResultPrograms />} />
        <Route path="/search/" element={<ResultPrograms />} />

        <Route path="/campus-update" element={<CampusUpdate />} />
        <Route path="/admin" element={<Sidebar_copy />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
