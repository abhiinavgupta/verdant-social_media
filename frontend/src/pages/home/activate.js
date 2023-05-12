import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header";
import LeftHome from "../../components/home/left";
import RightHome from "../../components/home/right";
import Stories from "../../components/home/stories";
import "./styles.css"
import CreatePost from "../../components/createPost";
import { useState } from "react";
import ActivateForm from "./ActivateForm";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";


export default function Activate() {
    const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((user) => ( {...user}));
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const { token } = useParams();



  useEffect(() => {
    activateAccount();
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const activateAccount = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/activate`, { token }, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });
      setSuccess(data.message);
      Cookies.set("user", JSON.stringify({ ...user, verified: true }), {expires: 365});
      dispatch({
        type: "VERIFY",
        payload: true,
      });
      setTimeout(() => {
        setLoading(false);
        navigate("/");
      }, 3000);
    }
    catch (error) {
      setError(error.response.data.message);
      setTimeout(() => {
        setLoading(false);
        navigate("/");
      }, 3000);
    }
  };

  return (
    <div className="home">
    {
        success && (
          <ActivateForm
            type="success"
            header="Account Verification Successful!"
            text={success}
            loading={loading}
          />
        )}
      {
        error && (
          <ActivateForm
            type="error"
            header="Account Verification Failed!"
            text={error}
            loading={loading}
          />
        )
      }
    <Header /> 
    <LeftHome user={user} />
    <div className="home_middle">
      <Stories />
      <CreatePost user={user} />
    </div>
    <RightHome user={user} />
    </div>
  );
}
