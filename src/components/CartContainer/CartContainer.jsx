import CartList from "../CartList/CartList";

import { PuffLoader } from "react-spinners";
import { useCartContext } from "../../Context/CartContext";

function CartContainer() {
  const { carrito } = useCartContext();
  return (
    <main className="bg-slate-100 from-primario-200 to-primario-100 container-fluid pb-8 pt-16 lg:pt-32 flex-grow">
      {carrito.length != 0 ? (
        <CartList productos={carrito} btn={"show"} />
      ) : (
        <PuffLoader
          color="#9c292d"
          className="mx-auto mt-28 mb-28"
          size={250}
        />
      )}
    </main>
  );
}

export default CartContainer;
