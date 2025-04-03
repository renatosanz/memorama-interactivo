import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home/Home";
import Levels from "./views/Levels/Levels";
import Game from "./views/Game/Game";

const router = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    { path: "/niveles", element: <Levels /> },
    { path: "/juego", element: <Game /> },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
