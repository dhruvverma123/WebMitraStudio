import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router";
import { Navbar } from "./Navbar/Navbar";
import { Homepage } from "./compontent/Home/Homepage";
import { AboutusPage } from "./compontent/Aboutus/Aboutuspage";
import { ContactUsPage } from "./compontent/ContactUs/Contactuspage";
import { PortfolioPage } from "./compontent/PortFolio/PortfolioPage";
import { ProcessPage } from "./compontent/Process/ProcessPage";
import Footer from "./Footer/Footer";
import BizGrow from "./compontent/PortFolio/portfolioExamples/Bizgrow/BizGrow";
import ShopEase from "./compontent/PortFolio/portfolioExamples/ShopEase/ShopEase";
import Alex from "./compontent/PortFolio/portfolioExamples/Alex/Alex";
import FoodVilla from "./compontent/PortFolio/portfolioExamples/FoodVilla/FoodVilla";
import TaskPro from "./compontent/PortFolio/portfolioExamples/TaskPro/TaskPro";
import { ToastContainer } from "react-toastify";
import ContextApi from "./ContextAPI";
import NotFound from "./NotFound/NotFound";
import WebDevelopmentCompanyInMeerut from "./compontent/Web-development-company-in-meerut/Web-development-company-in-meerut";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContextApi>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutusPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/portfolio/bizgrow" element={<BizGrow />} />
          <Route path="/portfolio/shopease" element={<ShopEase />} />
          <Route path="/portfolio/alex" element={<Alex />} />
          <Route path="/portfolio/foodvilla" element={<FoodVilla />} />
          <Route path="/portfolio/taskpro" element={<TaskPro />} />
          <Route
            path="/web-development-company-in-meerut"
            element={<WebDevelopmentCompanyInMeerut />}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </BrowserRouter>
    </ContextApi>
  </StrictMode>,
);
