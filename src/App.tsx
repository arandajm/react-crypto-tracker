import { FC, lazy } from "react";
import { Outlet, Route, Routes } from "react-router-dom";

const CryptoCurrencies = lazy(() => import("./components/CryptoCurrencies"));
const ErrorPage = lazy(() => import("./components/ErrorPage"));
const Header = lazy(() => import("./components/Header"));
const HomePage = lazy(() => import("./components/HomePage"));
const News = lazy(() => import("./components/News"));

const Layout: FC = () => {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <Header />
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="cryptocurrencies" element={<CryptoCurrencies />} />
            <Route path="cryptonews" element={<News />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
