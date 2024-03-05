import React, { useRef } from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import About from "../../components/About";
import Certificates from "../../components/Certificates";
import Statement from "../../components/Statement";
import Services from "../../components/Services";
import Team from "../../components/Team";
import Footer from "../../components/Footer";
import ContactUs from "../../components/ContactUs";

export default function Home() {
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  return (
    <>
      <Header />
      <Banner onclick={executeScroll} />
      <About />
      <Certificates />
      <Statement />
      <Services refProp={myRef} />
      <Team />
      <ContactUs />
      <Footer />
    </>
  );
}
