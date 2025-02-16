import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

export let UserContext = createContext();

export default function UserContextProvider(props) {
  let headers = { token: localStorage.getItem("setToken") };
  const [UserLogin, setUserLogin] = useState(null);
  const [loading, setloading] = useState(false);
 
  useEffect(() => {
    if (localStorage.getItem("setToken")) {
      setUserLogin(localStorage.getItem("setToken"));
    }
  }, []);

  return (
    <>
      <UserContext.Provider value={{ UserLogin, setUserLogin  }}>
        {props.children}
      </UserContext.Provider>
    </>
  );
}
