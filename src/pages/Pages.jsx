import { Home } from "./Home";
import {Cuisine} from "./Cuisine.jsx";
import { Searched } from "./Searched.jsx";
import {Routes, Route, useLocation} from "react-router-dom";
import {Recipe} from "./Recipe.jsx";
import { AnimatePresence } from "framer-motion";

export const Pages = () => {
    const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/cuisine/:type' element={<Cuisine />} />
          <Route path='/searched/:search' element={<Searched />} />
          <Route path='/recipe/:name' element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
};
