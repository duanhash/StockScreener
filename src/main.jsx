import React from "react";
import ReactDOM from "react-dom/client";
import { Home, Dow, Stocks, ErrorPage } from "./pages";
import { Layout } from "./components";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Indexes/Dow",
        element: <Dow />,
      },
      {
        path: "Stocks/:stock",
        element: <Stocks />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
