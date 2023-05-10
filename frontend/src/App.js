// import { useEffect } from "react";
import {Routes, Route} from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile"
import Main from "./pages/main";


function App() {
  return <div>
<Routes>
<Route path="/login" element={ <Login />} exact />
<Route path="/profile" element={ <Profile />} exact />
<Route path="/" element={ <Main />} exact />

</Routes>


  </div>

}


export default App;



