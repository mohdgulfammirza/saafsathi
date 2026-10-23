import { OurProducts } from "./Pages/OurProducts";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Home } from "./Pages/Home";
import { Navbar } from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
function App() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ourproducts" element={<OurProducts />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>

      <footer className="w-full bg-white/70 backdrop-blur-sm border-t border-slate-200 mt-8">
        <div className="max-w-md mx-auto px-6 py-4 text-center">
          <p className="text-xs sm:text-sm text-slate-500">
            © {currentYear}{" "}
            <span className="font-semibold text-slate-700">SaafSaathi</span>.
            All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
