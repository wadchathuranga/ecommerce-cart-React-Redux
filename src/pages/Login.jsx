import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../store/api/userApiSlice";
import { setCredentials } from "../store/authSlice";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);
  console.log("🚀 ~ Login ~ userInfo:", userInfo);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await login({
        username: email,
        password: password,
      }).unwrap();
      console.log("🚀 ~ submitHandler ~ response:", response);
      dispatch(setCredentials({ ...response }));
    } catch (err) {
      toast.error(err.data.message || err.error);
    }
  };

  return (
    <div>
      Login
      <div>
        <button
          type="button"
          className="bg-blue-600 rounded px-3 py-1 text-white"
          onClick={submitHandler}
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Login;
