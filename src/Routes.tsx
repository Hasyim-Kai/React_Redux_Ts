import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
   return <BrowserRouter >
      <Routes>
         <Route index element={<Auth />} />
         <Route path='home' element={<Home />} />
         <Route path='*' element={<NotFound />} />
      </Routes>
   </BrowserRouter >
}