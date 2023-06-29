import Navbar from "../components/Navbar/Navbar";
import CheckoutContainer from "../components/CheckoutContainer/CheckoutContainer";
import Footer from "../components/Footer/Footer";
import { CartContextProvider } from "../Context/CartContext";
import { ProdContextProvider } from "../Context/ProdContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Checkout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ProdContextProvider>
      <CartContextProvider>
        <Navbar />
        <CheckoutContainer />
        <ToastContainer
          position="bottom-center"
          autoClose={1000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="light"
        />
        <Footer />
      </CartContextProvider>
    </ProdContextProvider>
  );
}
