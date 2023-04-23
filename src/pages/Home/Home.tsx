import { Button } from 'antd';
import { Navbar } from './Navbar/Navbar';

const Home = () => {
  const hi = 'hello word';
  return (
    <>
      <Navbar />
      <Button>{hi}</Button>
    </>
  );
};

export default Home;
