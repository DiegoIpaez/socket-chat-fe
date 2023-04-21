import { Button } from 'antd';
import { Login, Register } from '../../components/Auth';

const Home = () => {
  const hi = 'hello word';
  return (
    <>
      <Button>{hi}</Button>
      <Login />
      <hr />
      <Register />
    </>
  );
};

export default Home;
