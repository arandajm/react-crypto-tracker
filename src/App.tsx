import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CryptoCurrencies from "./components/CryptoCurrencies";
import ErrorPage from "./components/ErrorPage";
import HomePage from "./components/HomePage";
import News from "./components/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cryptocurrencies",
    element: <CryptoCurrencies />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cryptonews",
    element: <News />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <header>
        <h1>Crypto tracker</h1>
      </header>
      <main>
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
