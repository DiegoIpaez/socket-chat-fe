import { Provider } from "react-redux";
import { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import AuthGuard from "./guards/auth.guard";
import Loading from "./components/Loading/Loading";
import { ROUTE_PATHS } from "./constants";
import { getSocket } from "./utils/socket.utility";

const Home = lazy(() => import("./pages/Home/Home"));
const Chat = lazy(() => import("./pages/Chat/Chat"));

const App = () => {
  const [socket] = useState(getSocket());
  const [online, setOnline] = useState<boolean | null>(null);

  useEffect(() => {
    socket.on("connect", () => setOnline(true));
  }, [socket]);
  useEffect(() => {
    socket.on("disconnect", () => setOnline(false));
  }, [socket]);

  useEffect(() => {
    // if (online === true) alert("connect to socket!.");
    if (online === false) alert("disconnect to socket.");
  }, [online]);

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
