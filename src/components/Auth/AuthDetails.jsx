import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../main";
import "./style.css";
import {
  HiOutlineMenu,
  HiOutlineX,
  HiHome,
  HiUserCircle,
  HiMinusSm,
} from "react-icons/hi";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const AuthDetails = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const MySwal = withReactContent(Swal);

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

    existence();
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
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
          title: "Sesion Expirada",
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {authUser ? (
        <>
          <div className=" md:flex flex-col justify-center items-center pb-40 text-center">
            <div className="md:flex flex-row w-full ">
              <button className="text-black w-fit">{children}</button>
              <button
                className="text-black text-sm pt-1.5"
                onClick={userSignOut}
              >
                Log Out
              </button>
            </div>
          </div>
        </>
      ) : (
        <p className="text-sm text-slate-400">Signed Out</p>
      )}
    </div>
  );
};

export default AuthDetails;
