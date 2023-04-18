"use client";
import Link from "next/link";
import { Children, createContext, useContext, useState } from "react";

//for client side

const Context = createContext({ user: {} });

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};

export const LogoutBtn = () => {
  const LogoutHandler = () => {
    alert("logged out ");
  };

  const { user } = useContext(Context);

  return user.id ? (
    <button className="btn" onClick={LogoutHandler}>
      Logout
    </button>
  ) : (
    <Link href={"/login"}>Login</Link>
  );
};

export const TodoButton = () => {
  return <></>;
};
