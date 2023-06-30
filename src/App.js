import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core";
import "bootstrap";
import Header from './component/Header/Header'
import './App.css'
// import Index from './component/body'
import PhotoGallery from "./component/Photo/PhotoGallery";
import NotFound from "./component/NotFound/NotFound";
import Contact from "./component/contact/Contact";
import FeedbackForm from "./component/Feedback/Feedback";

export default function App() {
  return (
    <BrowserRouter>
    <Routes >
        <Route path="/home" element={<Header />} />  
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="*" element={<NotFound />} />

    </Routes>
  </BrowserRouter>
  );
}
