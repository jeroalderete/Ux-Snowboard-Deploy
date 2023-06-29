/*  */
import { useContext, useState } from "react";

import { CartContextProvider } from "../../Context/CartContext";
import Navbar from "../../components/Navbar/Navbar";

import { ProdContextProvider } from "../../Context/ProdContext";

import {
  collection,
  getFirestore,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
/* import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content"; */
import "./Contacto.css";
import { useCartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Contacto = () => {
  const { enviarOrden } = useCartContext();

  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      alert("Ingrese un correo electrónico válido.");
      return;
    }
    if (email !== confirmEmail) {
      alert("Los correos electrónicos no coinciden.");
      return;
    }

    enviarOrden(formData);

    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  const [formData, setFormData] = useState({
    nombreCompleto: "",
    direccion: "",
    telefono: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));

    if (e.target.id == "email") {
      setEmail(e.target.value);
    }
  };

  /*   const { productsAdded, clearCartAfterBuying } = useContext(CartContext);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [redirection, setRedirection] = useState(false);
  const [sendContactState, setSendContactState] = useState(false);
 */
  {
    /*   const db = getFirestore();

  const updateContact = (productId, finalStock) => {
    const itemRef = doc(db, "items", productId);
    updateDoc(itemRef, { stock: finalStock }).catch((error) =>
      console.log({ error })
    );
  };

  const sendContact = () => {
    const totalPrice = productsAdded.reduce(
      (acc, product) => acc + product.quantity * product.price,
      0
    );

    const newContact = {
      name,
      lastName,
      email,
      phone,
      items: productsAdded,
      total: totalPrice,
    };

    const collectionRef = collection(db, "contact");

    addDoc(collectionRef, newContact)
      .then((response) => {
        const contactId = response.id;
         const MySwal = withReactContent(Swal);
        MySwal.fire({
          position: "center",
          icon: "success",
          title: (
            <p className="buyMessage">{`Su id de compra es ${contactId}`}</p>
          ),
          showConfirmButton: false,
          timer: 15500,
        }); 

        productsAdded.map((product) => {
          const finalStock = product.stock - product.quantity;
          updateContact(product.id, finalStock);
        });
      })
      .catch((error) => console.log({ error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRedirection(true);
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      position: "center",
      icon: "success",
      title: <p className="buyMessage">Muchas Gracias Por Su Compra!</p>,
      showConfirmButton: false,
      timer: 1500,
    }); 
    clearCartAfterBuying();
    setSendContactState(true);
  };
 */
  }
  return (
    <>
      <ProdContextProvider>
        <CartContextProvider>
          <Navbar></Navbar>
          <div className="wrapper2">
            <div className="form-background">
              <form onSubmit={handleSubmit}>
                <div className="payment md:flex justify-center pb-2">
                  <div className="payment-logo">
                    <p>UX</p>
                  </div>
                  <h1 className="text-xl pt-16">CONTACTO</h1>
                </div>

                {/*   <form onSubmit={handleSubmit}> */}
                <form>
                  <div className="">
                    <div className="card space icon-relative">
                      <label>Nombre</label>
                      <input
                        type="text"
                        id="nombreCompleto"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Nombre"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="card space icon-relative">
                      <label className="pb-10">Apellido</label>
                      <input
                        type="text"
                        id="Apellido"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                        placeholder="Apellido"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="card space icon-relative ">
                      <label>Email</label>
                      <input
                        id="email"
                        type="email"
                        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline email-input"
                        placeholder="Correo electrónico"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 font-medium mb-2"
                        htmlFor="confirmEmail"
                      >
                        Confirmar Email
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline confirm-email-input"
                        id="email"
                        type="email"
                        placeholder="Correo electrónico"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="card space icon-relative">
                      <label className="label">Telefono</label>
                      <input
                        required
                        id="telefono"
                        type="tel"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Número de teléfono"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        className="block text-gray-700 font-medium mb-2"
                        htmlFor="direccion"
                      >
                        Asunto
                      </label>
                      <textarea
                        className="shadow-xl appearance-none border-2 focus:border-primario-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="direccion"
                        placeholder="Mensaje"
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="bg-black hover:bg-primario-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Enviar
                    </button>

                    {/*    {sendContactState === true ? (
              ""
            ) : ( */}
                    <div className="btn-container-flex">
                      <div className="btn-container mb-5">
                        {/*   <button
                    onClick={sendContact}
                    disabled={
                      name.length === 0 ||
                      email.length === 0 ||
                      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email) ||
                      confirmEmail.length === 0 ||
                      phone.length === 0 ||
                      isNaN(phone) ||
                      confirmEmail != email
                    }
                    type="submit"
                    className="btn-pay"
                  >
                    Enviar
                  </button> */}
                      </div>
                    </div>
                    {/*  )} */}

                    {/*  {redirection ? <RedirectedLink /> : null} */}
                  </div>
                </form>
              </form>
            </div>
          </div>
          <Footer />
        </CartContextProvider>
      </ProdContextProvider>
    </>
  );
};

export default Contacto;
