import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import { LanguageProvider } from "./i18n/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#3B4CCA",
          fontFamily: "Inter, sans-serif",
          borderRadius: 10,
        },
      }}
    >
      <LanguageProvider>
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route
                path="*"
                element={
                  <div className="container section" style={{ textAlign: "center" }}>
                    <h2>404</h2>
                  </div>
                }
              />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </LanguageProvider>
    </ConfigProvider>
  );
};

export default App;
