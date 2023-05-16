// import { useEffect } from "react";
import {Routes, Route} from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile"
import Main from "./pages/main";
import LoggedInRoute from "./routes/LoggedInRoute";
import Home from "./pages/home";
import NotLoggenInRoutes from "./routes/NotLoggedInRoute";
import Activate from "./pages/home/activate";
import Reset from "./pages/reset";
import CreatePostPopup from "./components/createPostPopup";
import { useSelector } from "react-redux";
import { useState } from "react";



function App() {
  const [postVisible, setPostVisible] = useState(false);
  const { user, darkTheme } = useSelector((state) => ({ ...state }));
  return <div>
  {postVisible &&
        <CreatePostPopup 
        // type={type} 
        // showPreview={showPreview} 
        // setShowPreview={setShowPreview} 
        user={user} 
        setPostVisible={setPostVisible} 
        // posts={posts} 
        // dispatch={dispatch} 
        />
      }
<Routes>

<Route element={<LoggedInRoute />}>
<Route path="/profile" element={ <Profile />} exact />
<Route path="/" element={ <Home setPostVisible={setPostVisible}/>} exact />
<Route path="/activate/:token" element={<Activate />} exact />
</Route>
<Route element={<NotLoggenInRoutes />}>
<Route path="/login" element={ <Login />} exact />
</Route>
<Route path="/reset" element={<Reset />} />
</Routes>


  </div>

}


export default App;



