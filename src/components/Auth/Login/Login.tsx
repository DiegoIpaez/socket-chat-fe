import { message } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from '../../../utils/clientAxios.utility';
import { createUser } from '../../../redux/states/user';
import { setLocalStorage } from '../../../utils/localStorage.utility';

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const loginUser = async (e: any) => {
    try {
      e.preventDefault();
      const formData = e.currentTarget.elements;
      const email = formData[0].value;
      const password = formData[1].value;

      const { data } = await axios.post('/auth/login', {
        email,
        password,
      });
      const { createdAt, updatedAt, deleted, ...userLogged } = data.data.user;
      dispatch(createUser(userLogged));
      setLocalStorage('token', data.data.token);
      navigate('/chat');
    } catch (error: Error | unknown) {
      message.warning('Internal error');
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
