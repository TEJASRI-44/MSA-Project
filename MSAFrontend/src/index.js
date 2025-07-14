import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./header";
import Body from "./body";
import Footer from "./footer.js";
import Register from "./register.jsx";
import Error from "./error";
import About from "./aboutus.jsx";
import ContactUs from "./Contactus.jsx";
import Login from "./Login.jsx";
import OwnerLogin from "./ownerLogin.js";
import Cart from "./cart";
import Order from "./orders";
import First from "./first.js";
import OnlinePharmacyStore from "./ohome.js";
import AddMedicines from "./addMedicines.jsx";
import AddVendors from "./addVendor.jsx";
import ShippingPage from "./shipping.js";
import BillPage from "./bill.jsx";
import SalesReportProfitView from "./salesReportProfitView.jsx";
import SalesList from "./SalesList.jsx";
import RolesPage from "./role.jsx";
import PharmacistLogin from "./pharmacist.jsx";
import VendorLogin from "./vendor.jsx";
import PharmacistPage from "./pharmacistPage.jsx";
import LowStockMedicines from "./LowStockMedicines.jsx";
import VendorOrders from "./VendorOrders.jsx";
import VendorOrderHistory from "./VendorOrderHistory.jsx";
import VendorPage from "./VendorPage.jsx";
import PaymentCheck from "./PaymentCheck.jsx";
import PaymentHistory from "./PaymentHistory.jsx";

// ✅ Main layout with shared state
const MainLayout = ({ setCustomer }) => {
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [customer, updateCustomer] = useState(() => {
    const stored = localStorage.getItem("customer");
    return stored ? JSON.parse(stored) : null;
  });

  const addToCart = (medicine) => {
    setCartItems([...cartItems, medicine]);
    setCartCount((prev) => prev + 1);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.code !== id));
    setCartCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const checkout = () => {
    setOrders([...orders, ...cartItems]);
    setCartItems([]);
    setCartCount(0);
  };

  return (
    <>
      <Header cartCount={cartCount} />
      <Outlet
        context={{
          cartItems,
          addToCart,
          removeFromCart,
          checkout,
          orders,
          customer,
          setCustomer: updateCustomer, // so Login/Register can update it
          setCartCount,
        }}
      />
      <Footer />
    </>
  );
};

// Layout for routes that do not require Header and Footer
const RegisterLayout = ({ setCustomer }) => (
  <Outlet context={{ setCustomer }} />
);

// Routing configuration
const appRouter = (setCustomer) =>
  createBrowserRouter([
    {
      path: "/",
      element: <RegisterLayout setCustomer={setCustomer} />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <First /> },
        { path: "/home", element: <OnlinePharmacyStore /> },
        { path: "/role", element: <RolesPage /> },
        { path: "/pharmacist", element: <PharmacistLogin /> },
        { path: "/vendor", element: <VendorLogin /> },
        { path: "/vendorOrders", element: <VendorOrders /> },
        { path: "/vendorPage", element: <VendorPage /> },
        { path: "/paymentCheck", element: <PaymentCheck /> },
      ],
    },
    {
      path: "/body",
      element: <MainLayout setCustomer={setCustomer} />,
      children: [
        { path: "/body", element: <Body /> },
        { path: "/body/about", element: <About /> },
        { path: "/body/contact", element: <ContactUs /> },
        { path: "/body/cart", element: <Cart /> },
        { path: "/body/orders", element: <Order /> },
        { path: "/body/shipping", element: <ShippingPage /> },
        { path: "/body/bill", element: <BillPage /> },
      ],
    },
    {
      path: "/register",
      element: <RegisterLayout setCustomer={setCustomer} />,
      children: [{ path: "/register", element: <Register /> }],
    },
    {
      path: "/login",
      element: <RegisterLayout setCustomer={setCustomer} />,
      children: [{ path: "/login", element: <Login /> }],
    },
    {
      path: "/ownerLogin",
      element: <RegisterLayout setCustomer={setCustomer} />,
      children: [
        { path: "/ownerLogin", element: <OwnerLogin /> },
        { path: "/ownerLogin/addmedicine", element: <AddMedicines /> },
        { path: "/ownerLogin/pharmacistPage", element: <PharmacistPage /> },
        { path: "/ownerLogin/addvendor", element: <AddVendors /> },
        { path: "/ownerLogin/sales", element: <SalesReportProfitView /> },
        { path: "/ownerLogin/salesList", element: <SalesList /> },
        { path: "/ownerLogin/lowStockMedicines", element: <LowStockMedicines /> },
        { path: "/ownerLogin/vendorOrderHistory", element: <VendorOrderHistory /> },
        { path: "/ownerLogin/paymentHistory", element: <PaymentHistory /> },
      ],
    },
  ]);

const App = () => {
  const [customer, setCustomer] = useState(null);
  const router = appRouter(setCustomer);

  return <RouterProvider router={router} />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
