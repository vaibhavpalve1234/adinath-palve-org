import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Header from './component/Header/Header'
import './App.css'
import NotFound from "./component/NotFound/NotFound";

export default function App() {
  return (
    <BrowserRouter>
    <Routes >
        <Route path="/" element={<Header />} />  
        <Route path="*" element={<NotFound />} />

    </Routes>
  </BrowserRouter>
  );
}
