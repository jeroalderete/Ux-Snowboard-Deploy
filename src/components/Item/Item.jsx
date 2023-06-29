import { NavLink } from "react-router-dom";
import "animate.css";
import { PuffLoader } from "react-spinners";

import "./Item.css";

export default function CardItem({ datos }) {
  const { imagen, nombre, categoria, precio, id, stock, size } = datos;

  return (
    <NavLink
      to={`/item/${categoria}/${id}`}
      key={id}
      className="flex flex-row w-full  rounded overflow-hidden transition ease-in-out delay-150 duration-300 hover:scale-105 hover:bg-terciario-200 hover:shadow-lg hover:shadow-gray-500/50 border border-gray-400 hover:border-terciario-700 animate__animated animate__flipInX animate__delay-1s"
    >
      <div className=" basis-[15%] w-60 md:w-52  md:h-50 shrink-0 grow-0 item-search-container ">
        {imagen ? (
          <img className="object-cover ml-2 " src={imagen} alt={`${nombre}`} />
        ) : (
          <PuffLoader color="#9c292d" className="mx-auto my-10" size={100} />
        )}
      </div>
      <div className="relative flex flex-col px-4 py-2 flex-grow basis-[60%] ml-2">
        <p className="text-lg font-bold text-secundario-500 basis-[50%] categoria-text">{`${categoria}`}</p>
        <h4 className="text-md mb-2 text-primario-900 uppercase basis-[50%]">{`${nombre}`}</h4>
        <p className="text-lg font-bold text-black basis-[50%]">{`Size: ${size}`}</p>
        <p className="text-lg font-bold text-slate-800 basis-[50%]">{`$ ${precio}`}</p>
        <div className="absolute bottom-2 right-2 ">
          {stock === 0 ? (
            <span className="text-black bg-red-100 inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium">{`${stock} en stock`}</span>
          ) : 0 < stock && stock < 6 ? (
            <span className="text-yellow-800 bg-yellow-100 inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium">{`${stock} en stock`}</span>
          ) : (
            <span className="text-green-800 bg-green-100 inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium">{`${stock} en stock`}</span>
          )}
        </div>
      </div>
    </NavLink>
  );
}
