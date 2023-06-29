import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import {
  AiOutlineFrown,
  AiOutlineMeh,
  AiOutlineRest,
  AiOutlineSmile,
} from "react-icons/ai";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export function CartContextProvider({ children }) {
  const [carrito, setCarrito] = useState(() => {
    const datos = localStorage.getItem("carrito");
    return datos ? JSON.parse(datos) : [];
  });
  const MySwal = withReactContent(Swal);

  const db = getFirestore();

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarRopa = (ropa, cantidad) => {
    if (cantidad == null) {
      cantidad = 1;
    }
    let indice = carrito.findIndex((elemento) => elemento.id === ropa.id);

    if (indice !== -1) {
      if (carrito[indice].cantidad < carrito[indice].stock) {
        const actualizarCarrito = [...carrito];
        actualizarCarrito[indice].cantidad += cantidad;
        setCarrito(actualizarCarrito);
      }
    } else {
      const nuevaRopa = { cantidad, ...ropa };
      setCarrito([...carrito, nuevaRopa]);
    }

    const Toast = Swal.mixin({
      toast: true,
      position: "top-start",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    Toast.fire({
      icon: "success",
      title: "Producto Agregado Al Carrito",
    });
  };

  const sumarCantidad = (ropa) => agregarRopa(ropa, 1);
  const restarCantidad = (ropa) => {
    let indice = carrito.findIndex((elemento) => elemento.id === ropa.id);
    const cantidadActual = carrito[indice].cantidad;
    if (cantidadActual === 1) {
      const actualizarCarrito = carrito.filter((el) => el.id !== ropa.id);
      setCarrito(actualizarCarrito);
    } else {
      const actualizarCarrito = [...carrito];
      actualizarCarrito[indice].cantidad -= 1;
      setCarrito(actualizarCarrito);
    }

    toast(
      <span className="flex justify-between font-bold">
        <AiOutlineMeh className="text-yellow-600 w-7 h-7" /> Producto eliminado
        del carrito!
      </span>,
      {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
          backgroundColor: "#fef08a",
        },
      }
    );
  };

  const eliminarRopa = (ropa) => {
    const eliminarRopa = carrito.filter((buscar) => buscar.id !== ropa.id);
    toast(
      <span className="flex justify-between font-bold ">
        <AiOutlineFrown className="text-red-600 w-7 h-7" /> Producto eliminado
        del carrito
      </span>,
      {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
          backgroundColor: "#fecaca",
        },
      }
    );
    return setCarrito(eliminarRopa);
  };

  const vaciarCarrito = () => {
    setCarrito([]);

    toast(
      <span className="flex justify-between font-bold">
        <AiOutlineRest className="text-red-600 w-7 h-7" /> Carrito vaciado
      </span>,
      {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
          backgroundColor: "#fecaca",
        },
      }
    );
  };

  let contador = carrito.reduce(
    (acumulador, elemento) => acumulador + elemento.cantidad,
    0
  );

  let precioTotal = carrito.reduce(
    (acumulador, elemento) => acumulador + elemento.precio * elemento.cantidad,
    0
  );

  function actualizarOrden(productID, stockFinal) {
    const item = doc(db, "items", productID);
    updateDoc(item, { stock: stockFinal });
  }

  function enviarOrden(buyer) {
    const order = {
      buyer,
      items: carrito,
      total: precioTotal,
    };

    const collectionRef = collection(db, "orders");

    addDoc(collectionRef, order)
      .then((res) => {
        const orderID = res.id;
        alert(orderID);
        carrito.map((producto) => {
          const stockFinal = producto.stock - producto.cantidad;
          actualizarOrden(producto.id, stockFinal);
          vaciarCarrito();
        });
      })
      .catch((error) => console.log({ error }));
  }

  return (
    <CartContext.Provider
      value={{
        agregarRopa,
        eliminarRopa,
        vaciarCarrito,
        carrito,
        contador,
        sumarCantidad,
        restarCantidad,
        precioTotal,
        enviarOrden,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
