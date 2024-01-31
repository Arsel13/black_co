import { ChakraProvider } from "@chakra-ui/react";
import React, { createContext, useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./pages/home/Home";
import NoInternet from "./pages/errors/NoInternet";

export const ModeContext = createContext(null);
export default function App() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  useEffect(() => {
    function handleOnlineStatusChange() {
      setIsOnline(window.navigator.onLine);
    }

    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);

    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, []);
  return (
    <>
      {isOnline ? (
        <section className="font-fiexen">
          <ToastContainer />
          <ChakraProvider>
            <Router>
              <Routes>
                <Route exact path="/" element={<Home />} />
              </Routes>
            </Router>
          </ChakraProvider>
        </section>
      ) : (
        <NoInternet />
      )}
    </>
  );
}
