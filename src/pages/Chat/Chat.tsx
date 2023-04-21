import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetUser } from '../../redux/states/user';

const Chat = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(resetUser());
    navigate('/');
  };

  return (
    <div>
      <h1>Chat</h1>
      <br />
      <button type="button" onClick={() => logOut()}>
        logout
      </button>
    </div>
  );
};

export default Chat;
