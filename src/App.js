import React from "react";
// GlobalStyle
import GlobalStyle from "./Styled/GlobalStyle";
// Dom-Router
import { Route, Routes, useLocation } from "react-router-dom";
import AboutUs from "./Componant/AboutUs";
import NavBar from "./Componant/NavBar";
import OurWork from "./Componant/OurWork";
import ContactUS from "./Componant/ContactUS";
import MovieDetails from "./Componant/MovieDetails";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const Location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <AnimatePresence>
        <Routes location={Location} key={Location.pathname}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/work/:id" element={<MovieDetails />} />
          <Route path="/contactus" element={<ContactUS />} />
          <Route path="*" element={<h1>page not found</h1>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
