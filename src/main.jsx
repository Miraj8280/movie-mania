import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import toast, { Toaster } from "react-hot-toast";

import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Favourites from "./pages/Favourites.jsx";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Toaster />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
