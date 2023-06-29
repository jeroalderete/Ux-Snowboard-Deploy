import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import { useCartContext } from "../../Context/CartContext";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";
import "animate.css";
import "./CartWidget.css";

import { NavLink } from "react-router-dom";

export default function CartWidget({ widget }) {
  const [open, setOpen] = useState(false);
  const [prop, setProp] = useState("hidden");

  function abrirModal() {
    setOpen(true);
  }

  function cerrarModal() {
    setOpen(false);
  }

  const {
    carrito,
    eliminarRopa,
    vaciarCarrito,
    contador,
    sumarCantidad,
    restarCantidad,
    precioTotal,
    enviarOrden,
  } = useCartContext();

  useEffect(() => {
    contador == 0 ? setProp("hidden") : setProp("show");
  });

  return (
    <div
      className={`lg:${widget} relative carrito-mobile-cont widget-container `}
    >
      <button
        onClick={abrirModal}
        type="button"
        className="m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 "
      >
        <span className="sr-only carrito-mobile-cont ">Carrito</span>

        <img
          className="w-[25px] mb-5 carrito-navbar"
          src={"https://i.ibb.co/Jt8F96n/blackbag.png"}
          alt="bag"
        />
      </button>

      <div
        className={`${prop} items-center absolute p-2.5 -top-1.5 left-6 inline-flex rounded-full h-5 w-auto bg-terciario-900 text-white px-1.5 mx-5 mt-3.5`}
      >
        <span className="text-white bg-black">{contador}</span>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={cerrarModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    {carrito.length == 0 ? (
                      <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                        <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6 flex flex-col justify-center items-center">
                          <div className="flex items-start justify-between w-full">
                            <Dialog.Title className="text-lg font-medium text-gray-900">
                              Carrito
                            </Dialog.Title>
                            <div className="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                onClick={() => setOpen(false)}
                              >
                                <span className="sr-only">Cerrar Carrito</span>
                                <HiOutlineX
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-col justify-center items-center text-primario-500 font-bold text-3xl h-full">
                            <span>¡No hay productos!</span>
                            <IoWarningOutline className="mt-10 w-16 h-16 animate__animated animate__shakeX" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                        <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                          <div className="flex items-start justify-between">
                            <Dialog.Title className="text-lg font-medium text-gray-900">
                              Carrito
                            </Dialog.Title>
                            <div className="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                onClick={() => setOpen(false)}
                              >
                                <span className="sr-only">Cerrar Carrito</span>
                                <HiOutlineX
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </div>

                          <div className="mt-8">
                            <div className="flow-root">
                              <ul
                                role="list"
                                className="-my-6 divide-y divide-gray-200"
                              >
                                {carrito.map((product) => (
                                  <li key={product.id} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                      <img
                                        src={product.imagen}
                                        alt={`${product.nombre}`}
                                        className="h-full w-full object-cover object-center"
                                      />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900 uppercase">
                                          <h3>{product.nombre}</h3>
                                          <p className="ml-4 text-black">
                                            $ {product.precio}
                                          </p>
                                        </div>
                                      </div>
                                      <div className="flex flex-1 items-center justify-between text-sm pt-4">
                                        <p className="text-gray-500">
                                          Cantidad: {product.cantidad}
                                        </p>
                                        <div className="flex flex-row gap-5">
                                          <button
                                            onClick={() =>
                                              sumarCantidad(product)
                                            }
                                            className="hover:bg-green-200 hover:rounded-full p-1"
                                          >
                                            <FaPlus />
                                          </button>
                                          <button
                                            onClick={() =>
                                              restarCantidad(product)
                                            }
                                            className="hover:bg-red-200 hover:rounded-full p-1"
                                          >
                                            <FaMinus />
                                          </button>
                                        </div>
                                        <div className="flex">
                                          <button
                                            onClick={() =>
                                              eliminarRopa(product)
                                            }
                                            type="button"
                                            className="font-medium text-red-500 hover:text-red-700 hover:bg-red-200 hover:rounded-full p-1"
                                          >
                                            Eliminar
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex justify-center items-center text-center ">
                          <button
                            onClick={() => {
                              vaciarCarrito();
                              setOpen(false);
                            }}
                            className="inline-flex justify-center items-center text-center w-3/5 py-2 mb-4 border border-gray-300 rounded-md font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primario-500"
                          >
                            <FaTrash className="mr-2" />
                            Vaciar carrito
                          </button>
                        </div>
                        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Total</p>
                            <p className="text-black">{`$ ${precioTotal}`}</p>
                          </div>
                          <div className="mt-6">
                            <NavLink
                              to={"/checkout"}
                              className="flex items-center justify-center rounded-md border border-transparent bg-primario-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primario-700"
                            >
                              Finalizar Pedido
                            </NavLink>
                          </div>
                          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                              <button
                                type="button"
                                className="font-medium text-primario-600 hover:text-primario-500"
                                onClick={() => setOpen(false)}
                              >
                                Continuar comprando
                                <span aria-hidden="true"> &rarr;</span>
                              </button>
                            </p>
                          </div>
                          <div className="carrito-modal md:flex justify-center">
                            <NavLink to="/cart">
                              <div className=" text-3xl ml-4 mr-10  button-cart cart-widget w-full pt-10">
                                <p className="text-black text-sm  tracking-wide w-full">
                                  Ir al Carrito
                                </p>
                              </div>
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    )}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
