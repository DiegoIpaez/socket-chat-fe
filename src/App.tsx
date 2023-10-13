import { Provider } from 'react-redux';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from '@/redux/store';
import AuthGuard from '@/utils/guards/auth.guard';
import Loading from '@/components/Loading/Loading';
import { ROUTE_PATHS } from '@/utils/constants';

const Home = lazy(() => import('@/pages/Home/Home'));
const Chat = lazy(() => import('@/pages/Chat/Chat'));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path={ROUTE_PATHS.HOME} element={<Home />} />
            <Route path={ROUTE_PATHS.NOT_FOUND} element={<h1>NOT FOUND</h1>} />
            <Route element={<AuthGuard />}>
              <Route path={ROUTE_PATHS.CHAT} element={<Chat />} />
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
