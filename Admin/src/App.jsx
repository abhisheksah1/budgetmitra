import { Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Components/Dashboard/Dashboard";
import User from "./Components/User/User";
import Report from "./Components/Report/Report";
import Setting from "./Components/Setting/Setting";

function App() {
  return (
    <Routes>
      <Route path="/sidebar" element={<Sidebar />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="user" element={<User />} />
        <Route path="report" element={<Report />} />
        <Route path="setting" element={<Setting />} />
      </Route>
    </Routes>
  );
}

export default App;
