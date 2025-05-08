import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";
import ProductLayout from "./Products/ProductLayout";
import ProductList from "./Products/ProductList";
import ProductDetail from "./Products/ProductDetail";
import NotFound from "./pages/NotFound";

const App = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />} >
                  <Route index element={<Home />}/>
                </Route>

                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='products' element={<ProductLayout />} >
                  <Route index element={<ProductList />} />
                  <Route path=":id" element={<ProductDetail />} />
                </Route>
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App