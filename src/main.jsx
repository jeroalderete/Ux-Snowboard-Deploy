import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { CartContextProvider } from "./Context/CartContext";
import Navbar from "./components/Navbar/Navbar";
import { ProdContextProvider } from "./Context/ProdContext";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Title from "./components/Title/Title";

import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";

/* import { AuthenticationForm } from "./components/Auth/SignUp"; */

// ROUTES

import Root from "./routes/Root";
import ItemRoot from "./routes/ItemRoot";
import Cart from "./routes/Cart";
import Checkout from "./routes/Checkout";

// PAGES

import UxSnowboard from "./pages/UxSnowboard/UxSnowboard";
import Historia from "./pages/Historia/Historia";
import Eventos from "./pages/Eventos/Eventos";
import Lugares from "./pages/Lugares/Lugares";
import Contacto from "./pages/Contacto/Contacto";

// FIREBASE CONFIG

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/categoria/:id",
    element: <Root />,
  },
  {
    path: "/item/:category/:id",
    element: <ItemRoot />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/uxsnowboard",
    element: <UxSnowboard />,
  },
  {
    path: "/historia",
    element: <Historia />,
  },
  {
    path: "/eventos",
    element: <Eventos />,
  },
  {
    path: "/lugares",
    element: <Lugares />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  /*   {
    path: "/signup",
    element: <AuthenticationForm />,
  }, */
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);
