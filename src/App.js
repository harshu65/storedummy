import './App.css';
import { Suspense, lazy } from "react";
import Header from './components/Header';
import { Contact } from './components/Contact';
import { About } from './pages/About';
import Footer from './components/Footer';
import Product from './pages/Product';
import { Loading } from './components/Loading.js';
import { Navigate } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import { Route, Routes, BrowserRouter, HashRouter } from 'react-router-dom';
import Cart from './pages/Cart';
import Categories from './components/Categories';

//adding custom delay
function delayy(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
const Products = lazy(() => delayy(import('./pages/Products')));
const Home = lazy(() => delayy(import('./pages/Home')));
function App() {
  return (
    <>

      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Suspense fallback={<Loading />}>
              <Home /></Suspense>} />
            <Route path="/Products"
              element={<Suspense fallback={<Loading />}>
                <Products /></Suspense>} />
            <Route path="/Products/:id" element={<Product />} />
            <Route path="/Products/category/:category" element={<Categories />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            <Route path="/404" element={<PageNotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
