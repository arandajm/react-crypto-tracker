import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import HomePage from "./components/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
