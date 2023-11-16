import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, defer } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/homePage/HomePage";
import SearchingCard from "./pages/SearchingCard";
import Shop from "./pages/Shop";
import Pokedeck from "./pages/pokedeck/Pokedeck";
import CardPage from "./pages/cardPage/CardPage";

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
      },
      {
        path: "/search/:id",
        element: <CardPage />,
        loader: ({ params }) => {
          const card = fetch(`https://api.pokemontcg.io/v2/cards/${params.id}`);
          return card;
        },
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/pokedeck",
        element: <Pokedeck />,
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
