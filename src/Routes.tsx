import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
   return <BrowserRouter >
      <Routes>
         <Route index element={<Home />} />
         <Route path='*' element={<NotFound />} />
      </Routes>
   </BrowserRouter >
}