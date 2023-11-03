import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, defer } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import SearchingCard from "./pages/SearchingCard";
import Shop from "./pages/Shop";
import CardPage from "./pages/CardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/search",
        element: <SearchingCard />,
        loader: () => {
          const cards = fetch(
            "https://api.pokemontcg.io/v2/cards?pageSize=50"
          ).then((res) => res.json());
          return defer({ cards });
        },
        children: [
          {
            path: "/search/:id",
            element: <CardPage />,
            loader: () => {
              const cards = fetch(
                "https://api.pokemontcg.io/v2/cards?pageSize=50"
              ).then((res) => res.json());
              return defer({ cards });
            },
          },
        ],
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "*",
        element: <div>Not found</div>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
