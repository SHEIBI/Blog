import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Context } from "./context/Context";
import{useContext} from "react";

function App() {
  // const user=false;
  const {user} = useContext(Context);
  return (
    <Router>
        <TopBar/>
        <Routes>
          <Route path="/" element={<Home/>} >
          </Route>
          <Route path="/register" element={user ? <Home /> :<Register />} >
          </Route>
          <Route path="/login" element={user ? <Home/>:<Login/>} >
          </Route>
          <Route path="/write" element={user ? <Write/>:<Register/>} >
          </Route>
          {/* <Route path="/write" element={<Write/>} >
          </Route> */}
          <Route path="/settings" element={user ? <Settings/>:<Register/>} >
          </Route>
          <Route path="/post/:postId" element={<Single/>} >
          </Route>

        </Routes>
    </Router>
  );
}

export default App;
