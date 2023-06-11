import React from "react";
import { Home } from "../pages/Home";
import { Routes, Navigate, Route } from "react-router-dom";
import { Tours } from "../pages/Tours";
import { TourDetail } from "../pages/TourDetail";
import { SearchResultList } from "../pages/SearchResultList";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

const Routers = () => {
    return <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:id" element={<TourDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tours/search" element={<SearchResultList />} />
    </Routes>
}

export default Routers;