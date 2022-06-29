import Home from "./pages/home/Home";
import TopBar from ".//Components/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { useContext } from "react";
import {Context} from "./context/Context";

import {
  BrowserRouter,
  Routes,
  Route,
}from "react-router-dom";


function App() {
const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" exact element={<Home />}> </Route>
        <Route path="/register" exact element={user ? <Home /> : <Register />}> </Route>
        <Route path="/login" exact element={user ? <Home /> : <Login />}> </Route>
        <Route path="/write" exact element={user ? <Write /> : <Register />}> </Route>
        <Route path="/settings" exact element={user ? <Settings /> : <Register />}> </Route>
        <Route path="/post/:postid" exact element={<Single />}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
