import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../../redux/states/user";
import { setLocalStorage } from "../../../utils/localStorage.utility";
import axios from "../../../utils/clientAxios.utility";

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = e.currentTarget.elements;
    const username = formData[0].value;
    const email = formData[1].value;
    const password = formData[2].value;

    const { data } = await axios.post("/auth/register", {
      email,
      username,
      password,
    });
    const { createdAt, updatedAt, deleted, ...userLogged } = data.data.user;
    dispatch(createUser(userLogged));
    setLocalStorage("token", data.data.token);
    navigate("/chat");
  };
  return (
    <div>
      <h1>REGISTRO</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="test" />
        <br />
        <br />
        <input type="email" placeholder="user@mail.com" />
        <br />
        <br />
        <input type="password" placeholder="********" />
        <br />
        <button>Register</button>
      </form>
    </div>
  );
};
