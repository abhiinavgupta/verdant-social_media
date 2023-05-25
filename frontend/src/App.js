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
import { useEffect, useReducer, useState } from "react";
import { postsReducer } from "./functions/reducers";
import axios from "axios";
import Friends from "./pages/friends";



function App() {
  const [postVisible, setPostVisible] = useState(false);
  const { user, darkTheme } = useSelector((state) => ({ ...state }));

  const [{ loading, posts, error }, dispatch] = useReducer(postsReducer, {
    loading: false,
    posts: [],
    error: ""
  });

  useEffect(() => {
        getAllPosts();
  },[]);

  const getAllPosts = async () => {
    try {
      dispatch({
        type: "POSTS_REQUEST"
      });
      const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getAllPosts`, {
        headers: {
          Authorization: `Bearer ${user?.token}`
        }
        
      });
      dispatch({
        type: "POSTS_SUCCESS",
        payload: data,
      });

    }
    catch (error) {
      dispatch({
        type: "POSTS_ERROR",
        payload: error.response.data.message,
      });
      console.log(error)
    }

  };

// console.log(posts);
return <div className={darkTheme ? "dark" : ""}>
   {/* return <div className="dark">  */}
  {postVisible &&
        <CreatePostPopup 
        // type={type} 
        // showPreview={showPreview} 
        // setShowPreview={setShowPreview} 
        user={user} 
        setPostVisible={setPostVisible} 
        posts={posts} 
        dispatch={dispatch} 
        />
      }
<Routes>

<Route element={<LoggedInRoute />}>
<Route path="/profile" element={ <Profile  setPostVisible={setPostVisible} getAllPosts={getAllPosts} />} exact />
<Route path="/profile/:username" element={ <Profile setPostVisible={setPostVisible} getAllPosts={getAllPosts} />} exact />
<Route path="/friends" element={<Friends setPostVisible={setPostVisible} />} exact />
<Route path="/friends/:type" element={<Friends setPostVisible={setPostVisible} />} exact />
<Route path="/" element={ <Home setPostVisible={setPostVisible} getAllPosts={getAllPosts} 
posts={posts} loading={loading}
 />} exact />
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



