import Header from "./components/Header/Header";
import ProductItems from './components/Product/ProductItem';
import "bootstrap/dist/css/bootstrap.min.css";
import CartSection from "./components/Cart/Cart";
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About";
import Footer from "./components/Footer/Footer";
import Layout from "./Layout";
import { CartProvider } from "./store/CartProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/store", element: <ProductItems /> },
      { path: "/cart", element: <CartSection /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <CartProvider>
        <Header />
        <Footer />
      </CartProvider>
    </RouterProvider>
  );
}

export default App;
