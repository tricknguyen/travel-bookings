import React from "react";
import Router from "../../router/Router";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = () => {
    return <>
        <Header />
        <Router />
        <Footer />
    </>;
};

export default Layout;