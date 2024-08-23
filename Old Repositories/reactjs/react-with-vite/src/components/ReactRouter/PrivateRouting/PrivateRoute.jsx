import { Route, Routes } from "react-router-dom";
import Dashboard from "./DashBoard";
import Login from "../../Login";
// import Header from "../Header";
import PrivateOutlet from "./PrivateOutlet";

function PrivateRoute() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<PrivateOutlet />}>
          <Route path="dashboard" element={<Dashboard title="Dashboard" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default PrivateRoute;
