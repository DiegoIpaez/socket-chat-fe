import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetUser } from '../../redux/states/user';
import Sidebar from './Layout/Sidebar';
import './chat.css';
import { NotSelectedChat, Messages } from '../../components/Chat';

const Chat = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(resetUser());
    navigate('/');
  };

  return (
    <div className="messaging">
      <div className="inbox_msg">
        <div className="inbox_people">
          <div className="headind_srch">
            <div className="recent_heading">
              <h4>Recientes</h4>
            </div>
            <div className="srch_bar">
              <div className="stylish-input-group">
                <button
                  type="button"
                  onClick={() => logOut()}
                  className="btn text-danger"
                >
                  Salir
                </button>
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
        {/* <Messages /> */}
        <NotSelectedChat />
      </div>
    </div>
  );
};

export default Chat;
