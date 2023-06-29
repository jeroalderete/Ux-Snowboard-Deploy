import "animate.css";
import { useCartContext } from "../../Context/CartContext";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { PuffLoader } from "react-spinners";

export default function CartItem({ datos }) {
  const { imagen, nombre, precio, id, stock, cantidad } = datos;

  const { carrito, sumarCantidad, restarCantidad, eliminarRopa } =
    useCartContext();
  const navigate = useNavigate();

  function letrasMayusculas(string) {
    const palabras = string.split(" ");

    const capitalize = palabras.map((el) => {
      const primerLetra = el.charAt(0).toUpperCase();
      const restoPalabra = el.slice(1);
      return `${primerLetra}${restoPalabra}`;
    });

    return capitalize.join(" ");
  }

  function restar() {
    if (carrito.length == 1 && cantidad == 1) {
      restarCantidad(datos);

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else restarCantidad(datos);
  }

  function eliminar() {
    if (carrito.length == 1) {
      eliminarRopa(datos);

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else eliminarRopa(datos);
  }

  return (
    <>
      <div
        key={id}
        className={`mt-10 flex flex-row bg-white p-4 rounded-lg shadow-md animate__animated animate__flipInX animate__delay-1s`}
      >
        {imagen ? (
          <img
            className="w-28 h-28 object-contain mr-4"
            src={imagen}
            alt={`${nombre}`}
          />
        ) : (
          <PuffLoader color="#9c292d" className="mx-auto my-10" size={100} />
        )}
        <div className="flex-1 border-l border-gray-300 pl-4">
          <h4 className="text-md font-medium mb-2">{`${letrasMayusculas(
            nombre
          )}`}</h4>
          <p className="text-gray-500 text-sm ">{`Cantidad: ${cantidad}`}</p>
          <p className="text-gray-500 text-lg font-bold">{`$ ${precio}`}</p>
          <div className="flex justify-between items-center">
            <div className="flex flex-row gap-5">
              <button
                onClick={() => sumarCantidad(datos)}
                className="hover:bg-green-200 hover:rounded-full p-1"
              >
                <FaPlus />
              </button>
              <button
                onClick={() => restar()}
                className="hover:bg-red-200 hover:rounded-full p-1"
              >
                <FaMinus />
              </button>
            </div>
            <button
              onClick={() => eliminar()}
              type="button"
              className="font-medium text-red-500 hover:text-red-700 hover:bg-red-200 hover:rounded-full p-1"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
