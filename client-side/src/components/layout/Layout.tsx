import React from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import Router from "../../router/Router";

export const Layout = () => {
    return <>
        <Header />
        <Router />
        <Footer />
    </>;
};