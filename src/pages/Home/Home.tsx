import { Button } from 'antd';
import { Login, Register } from '../../components/Auth';
import { Navbar } from './Navbar/Navbar';

const Home = () => {
  const hi = 'hello word';
  return (
    <>
      <Navbar />
      <Button>{hi}</Button>
      <Login />
      <hr />
      <Register />
    </>
  );
};

export default Home;
