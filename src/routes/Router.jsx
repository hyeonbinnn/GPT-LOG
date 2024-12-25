import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './../pages/HomePage/Home';
import Error from '../pages/ErrorPage/Error';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
