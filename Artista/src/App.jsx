import React, { useEffect, useState,Suspense} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Merge, ProductPage, ProductView } from './VR_';


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
     
        <Route index element={<ProductPage/>} />
        <Route path="/Product" element={<ProductView/>} />
        <Route path="/Merge" element={<Merge/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
