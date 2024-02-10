import { Route, Routes } from "react-router-dom";
import UserTemplate from "./templates/UserTemplate/UserTemplate";
import HomePage from "./pages/HomePage/HomePage";
import Page404 from "./pages/Page404/Page404";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route element={<UserTemplate />} path="/">
          <Route element={<HomePage />} index></Route>
          <Route element={<Register />} path="/signup"></Route>
          <Route element={<Login />} path="/login"></Route>
        </Route>

        <Route element={<Page404 />} path="*"></Route>
      </Routes>
    </>
  );
}

export default App;
