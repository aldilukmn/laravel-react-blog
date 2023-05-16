import React from "react";
import { Content, Footer, Header } from "../../components";

const Main = () => {
    return (
        <div className="d-flex flex-column vh-100">
            <Header />
            <div className="d-flex flex-grow-1 justify-content-center align-items-center">
                <Content />
            </div>
            <Footer />
        </div>
    );
};

export default Main;
