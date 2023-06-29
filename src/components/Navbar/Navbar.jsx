import CartWidget from "../CartWidget/CartWidget";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  HiOutlineMenu,
  HiOutlineX,
  HiHome,
  HiUserCircle,
  HiMinusSm,
} from "react-icons/hi";
import { GiClothes } from "react-icons/gi";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { ImWhatsapp } from "react-icons/im";
import { NavLink, Link } from "react-router-dom";
import { auth } from "../../main";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useProdContext } from "../../Context/ProdContext";
import AuthDetails from "../Auth/AuthDetails";
import "./Navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [authUser, setAuthUser] = useState(null);

  const { buscar } = useProdContext();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "categoria");

    getDocs(itemsCollection)
      .then((snapshot) => {
        const docs = snapshot.docs;
        setCategorias(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        console.log(categorias);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const handleChange = (event) => {
    const input = event.target.value;
    buscar(input);
  };

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        alert("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <header className={`isolate  bg-white fixed inset-x-0 top-0 z-10`}>
      <div className="from-primario-600 to-primario-400 pb-1 px-6 pt-3 lg:px-8 hidden lg:flex lg:justify-between border-black first-nav-container">
        <div className="flex justify-between w-28 text-white ">
          <a href="#facebook">
            <SlSocialFacebook className="h-6 w-6" />
          </a>
          <a href="#insta">
            <SlSocialInstagram className="h-6 w-6" />
          </a>
          <a href="#wp">
            <ImWhatsapp className="h-6 w-6" />
          </a>
        </div>
        <CartWidget widget="block ml-40" />
        <div
          href="#"
          className="flex text-white gap-10 text-sm font-semibold leading-7 "
        >
          <div className="loginStatus pt-2"></div>

          <NavLink className="font-light" to="/signup">
            MI CUENTA
          </NavLink>
          <NavLink to="/signin" className="font-light">
            INICIAR SESION
          </NavLink>
          <div className="h-fit">
            <div className="text-black  w-fit ">
              <AuthDetails>
                <HiUserCircle
                  className="h-7 w-20   auth-container"
                  onClick={userSignOut}
                />
              </AuthDetails>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:px-8 ">
        <nav
          className="flex items-center justify-between pb-2 pt-2"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <NavLink to="/">
              <img
                src="https://i.ibb.co/TqJhPR0/snowfinal3.png"
                width="38"
                className="header__logo left text-black img-logo-snow"
              />
            </NavLink>
          </div>

          {/* Boton hamburguesa */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Abrir Menu</span>
              <HiOutlineMenu
                className="text-primario-700 h-6 w-6 ml-5"
                aria-hidden="true"
              />
            </button>
          </div>
          {/* Opciones del nav */}
          <div className="navigation__item ">
            <div className="hidden lg:flex lg:gap-x-12 pt-9 pb-2 navigation__link  ">
              <NavLink
                to="/uxsnowboard"
                className="text-gray-800 md:flex flex-col  justify-center align-middle hover:text-gray-400 duration-500 navLink"
              >
                UX
              </NavLink>
              <NavLink
                to="/historia"
                className="text-gray-800 md:flex flex-col justify-center align-middle hover:text-gray-400 duration-500"
              >
                HISTORIA
              </NavLink>
              <NavLink
                to="/eventos"
                className="text-gray-800 md:flex flex-col justify-center align-middle hover:text-gray-400 duration-500"
              >
                EVENTOS
              </NavLink>
              <NavLink
                to="/lugares"
                className="text-gray-800 md:flex flex-col justify-center align-middle hover:text-gray-400 duration-500"
              >
                LUGARES
              </NavLink>
              <NavLink
                to="/categoria/snowboard"
                className="text-gray-800 md:flex flex-col justify-center align-middle hover:text-gray-400 duration-500"
              >
                SNOWBOARD
              </NavLink>
              <NavLink
                to="/categoria/surfboard"
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                SURFBOARD
              </NavLink>
              <NavLink
                to="/contacto"
                className="text-gray-800 md:flex flex-col justify-center align-middle hover:text-gray-400 duration-500"
              >
                CONTACTO
              </NavLink>
            </div>
            <Menu as="div" className="relative inline-block text-left">
              <div></div>
            </Menu>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end ml-20">
            <div className="form-group fg--search">
              <input
                className="input-container block w-full bg-slate-100  text-slate-900 text-center placeholder:text-slate-400 sm:text-sm sm:leading-3"
                placeholder="¿Qué estás buscando?"
                aria-label="search"
                type="text"
                onChange={handleChange}
              />
              <button>
                <i className="fa fa-search search-icon"></i>
              </button>
            </div>
          </div>
        </nav>
        {/* Modo movil */}

        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel
            style={{ width: "300px" }}
            className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-3 lg:hidden hamburger-container"
          >
            <div className="mobile-container">
              <div className="flex items-center justify-between">
                <NavLink to="/" className="-m-1.5 p-1.5">
                  <img
                    className="w-[30px]"
                    src={"https://i.ibb.co/TqJhPR0/snowfinal3.png"}
                    alt="MALKA"
                  />
                </NavLink>
                <CartWidget />
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <HiOutlineX
                    className="text-primario-700 text-primario-500 h-6 w-6"
                    aria-hidden="true"
                  />
                </button>
              </div>
              <div className="mt-6 flow-root hamburger-links">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="w-full space-y-2 py-6">
                    <NavLink
                      to={"/uxsnowboard"}
                      className="-mx-3 flex rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 uppercase"
                    >
                      <HiHome className="text-primario-700 h-6 w-6 mr-2" />
                      UX
                    </NavLink>
                    <NavLink
                      to={"/historia"}
                      className="-mx-3 flex rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 uppercase"
                    >
                      HISTORIA
                    </NavLink>
                    <NavLink
                      to={"/eventos"}
                      className="-mx-3 flex rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 uppercase"
                    >
                      EVENTOS
                    </NavLink>
                    <NavLink
                      to={"/lugares"}
                      className="-mx-3 flex rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 uppercase"
                    >
                      LUGARES
                    </NavLink>
                    <NavLink
                      to={"/contacto"}
                      className="-mx-3 flex rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 uppercase"
                    >
                      CONTACTO
                    </NavLink>
                    <NavLink
                      to={"/contacto"}
                      className="-mx-3 flex rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 uppercase"
                    >
                      CARRITO
                    </NavLink>

                    <Menu as="div" className="w-full inline-block text-left">
                      <div className="w-full ">
                        <Menu.Button className="w-full py-3 rounded-lg inline-flex text-base font-semibold leading-7 text-gray-900 uppercase">
                          <GiClothes className="text-primario-700 h-6 w-6 mr-2" />{" "}
                          <NavLink
                            to={"/"}
                            className="-mx-3 flex rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 uppercase"
                          >
                            BOARDS
                          </NavLink>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className=" w-56 origin-top-right divide-y divide-gray-400 rounded-md bg-transparent shadow-lg ring-2 ring-black ring-opacity-10 focus:outline-none">
                          {categorias.map((ropa) => {
                            return (
                              <div
                                key={ropa.key}
                                id={ropa.id}
                                className="px-1 py-1 "
                              >
                                <Menu.Item>
                                  {({ active }) => (
                                    <NavLink to={`/category/${ropa.nombre}`}>
                                      <button
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`${
                                          active
                                            ? "bg-primario-500 text-white"
                                            : "text-gray-900"
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm uppercase`}
                                      >
                                        {ropa.nombre}
                                      </button>
                                    </NavLink>
                                  )}
                                </Menu.Item>
                              </div>
                            );
                          })}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                  <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link to="/">
                      <input
                        className=" rounded-full block w-60 bg-gray-300 py-4 pl-4 pr-12 text-slate-900 placeholder:text-slate-600 sm:text-sm sm:leading-6"
                        placeholder="Buscar..."
                        aria-label="Buscar ropa"
                        type="text"
                        onChange={handleChange}
                      />
                    </Link>
                  </div>
                  <div className="py-6"></div>
                </div>
              </div>
            </div>{" "}
            <a
              href="#"
              className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
            >
              Log in gz
            </a>
          </Dialog.Panel>
        </Dialog>
      </div>
      <hr className="border-gray-400" />
    </header>
  );
};

export default Navbar;
