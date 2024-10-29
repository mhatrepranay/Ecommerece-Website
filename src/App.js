import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar";
import Products from "./components/products/Products";
import Product from "./components/product/Product";
import Contact from "./components/contact/Contact";
import About from "./components/About";
import Login1 from "./components/log/Login1";
import Admin from "./components/admin/Admin";
import Alert from "./components/Alert";
import Qr from "./components/QRCode/Qr";
import Testt from "./components/Testt";
import UserList from "./components/admin/UserList";
import Signup from "./components/log/Signup";
import Footer from "./components/footer/Footer";
import Msglist from "./components/admin/Msglist";
import Productlist from "./components/admin/Productlist";
import Addproduct from "./components/admin/Addproduct";
import Gencode from "./components/admin/Gencode";
import Search from "./components/product/Search";
import Update from "./components/admin/Update";
import Chatbot from "./components/ChatBot/Chatbot";
import Chatbotcomponent from "./components/ChatBot/Chatbotcomponent";
import SendReply from "./components/admin/SendReply";
import PlaceOrder from "./components/product/PlaceOrder ";
import Orderlist from "./components/admin/Orderlist";
import Orders from "./components/product/Orders";


function App(props) {
  const loggedInUserFromStorage = JSON.parse(localStorage.getItem('loggedInUser'));
  const [loggedInUser, setLoggedInUser] = useState(loggedInUserFromStorage);
  const [alert, setAlert] = useState(null);
  // const [loggedInUser, setLoggedInUser] = useState(null); // Add state for logged-in user
  const location = useLocation();

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };



  // <Route path="/prodlist" element={<Productlist showAlert={showAlert} />} />
  const renderNavbar = !["/", "/admin", "/userlist", "/msglist", "/signup", "/prodlist", "/addprod", "/gencode", "/update/:id", "/sendreply", "/qr", "/orderlist"].includes(location.pathname) && !location.pathname.startsWith("/update/");

  const renderAdmin = [""].includes(location.pathname);
  const renderfooter = ["/home", "/products", "/product", "/contact", "/about"].includes(location.pathname);

  return (
    <>

      {renderNavbar && (
        <Navbar
          showAlert={showAlert}
          loggedInUser={loggedInUser}
          setLoggedInUser={setLoggedInUser}

        />
      )}
      <Chatbotcomponent />
      {renderAdmin && <Admin showAlert={showAlert} />}
      <Alert alert={alert} />

      <Routes>
        <Route path="/" element={<Testt showAlert={showAlert} setLoggedInUser={setLoggedInUser} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/products" element={<Products showAlert={showAlert} />} />
        <Route path="/product" element={<Product showAlert={showAlert} />} />
        <Route path="/contact" element={<Contact showAlert={showAlert} />} />
        <Route path="/about" element={<About showAlert={showAlert} />} />
        <Route path="/login1" element={<Login1 showAlert={showAlert} />} />
        <Route path="/admin" element={<Admin showAlert={showAlert} />} />
        <Route path="/userlist" element={<UserList showAlert={showAlert} />} />
        <Route path="/msglist" element={<Msglist showAlert={showAlert} />} />
        <Route path="/sendreply" element={<SendReply showAlert={showAlert} />} />
        <Route path="/prodlist" element={<Productlist showAlert={showAlert} />} />
        <Route path="/addprod" element={<Addproduct showAlert={showAlert} />} />
        <Route path="/gencode" element={<Gencode showAlert={showAlert} />} />
        <Route path="/signup" element={<Signup showAlert={showAlert} />} />
        <Route path="/search" element={<Search showAlert={showAlert} />} />
        <Route path="/update/:id" element={<Update showAlert={showAlert} />} />
        <Route path="/place/:id" element={<PlaceOrder showAlert={showAlert} loggedInUser={loggedInUser} />} />
        <Route path="/orderlist" element={<Orderlist />} />
        <Route path="/orders" element={<Orders loggedInUser={loggedInUser} />} />
        {/* <Route path="/update1/:id" element={<UpdateContact showAlert={showAlert} />} /> */}
        <Route path="/qr" element={<Qr />} />
      </Routes>
      {renderfooter && <Footer />}

    </>
  );
}

export default App;