'use client'

import { Home } from "./Home";
import Navbar from "./Navbar";
import { ImageSlider } from "./ImageSlider";
import Esportrule from "./Esportrule";
import Noti from "./Noti";


const App = () => {
  return (
    <>
     <Noti/>
      <Navbar />
      <Home />
      <ImageSlider />
      <Esportrule />

     
    </>
  );
};

export default App;
