// import { useEffect } from "react";
import {Routes, Route} from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile"
import Main from "./pages/main";
import LoggedInRoute from "./routes/LoggedInRoute";
import Home from "./pages/home";
import NotLoggenInRoutes from "./routes/NotLoggedInRoute";



function App() {
  return <div>
<Routes>

<Route element={<LoggedInRoute />}>
<Route path="/profile" element={ <Profile />} exact />
<Route path="/" element={ <Home />} exact />
</Route>
<Route element={<NotLoggenInRoutes />}>
<Route path="/login" element={ <Login />} exact />
</Route>
</Routes>


  </div>

}


export default App;



