import { useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import HeroImage from "../HeroImage/HeroImage";
import { PuffLoader } from "react-spinners";
import { useProdContext } from "../../Context/ProdContext";
import Title from "../Title/Title";


export default function ItemListContainer({ category, isRoute }) {
  const { productos, filtroCategoria, AllProducts } = useProdContext();

  useEffect(() => {
    if (isRoute) {
      filtroCategoria(category);
    } else {
      AllProducts();
    }
  }, [category]);
  return (
    <main className="from-primario-200 to-primario-100 container-fluid pb-40 pt-40  product-container">
      {productos.length != 0 ? (
        <>
         
          <ItemList productos={productos} />
        </>
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
