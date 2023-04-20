import { useDispatch } from "react-redux";
import axios from "../../../utils/clientAxios.utility";
import { createUser } from "../../../redux/states/user";
import { useNavigate } from 'react-router-dom'
import { setLocalStorage } from '../../../utils/localStorage.utility';

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginUser = async (e: any) => {
    try {
      e.preventDefault();
      const formData = e.currentTarget.elements;
      const email = formData[0].value;
      const password = formData[1].value;

      const { data } = await axios.post("/auth/login", {
        email,
        password,
      });
      const { createdAt, updatedAt, deleted, ...userLogged } = data.data.user;
      dispatch(createUser(userLogged));
      setLocalStorage("token", data.data.token);
      navigate('/chat')
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <h1>LOGIN</h1>
      <form onSubmit={(e) => loginUser(e)}>
        <input type="email" placeholder="user@mail.com" />
        <br />
        <br />
        <input type="password" placeholder="********" />
        <button>Login</button>
      </form>
    </div>
  );
};
