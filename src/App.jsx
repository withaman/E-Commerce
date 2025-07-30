import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Collection from "./pages/Collection";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import Product from "./pages/Product";
import Home from "./pages/Home";
import PlaceOrder from "./pages/PlaceOrder";
import Footer from "./components/Footer";
import Demo from "./components/Demo";

function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
