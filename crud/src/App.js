import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home/Home";
import Booking from "./Components/Home/HomePage/Booking";
import HomePage from "./Components/Home/HomePage/HomePage";
import Post from "./Components/Home/Post/Post";
import ServiceManger from "./Components/Home/ServiceManger/ServiceManger";
import Update from "./Components/Home/update/Update";

function App() {
  return (
    <BrowserRouter>
      <Home></Home>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/homePage" element={<HomePage />}></Route>
        <Route path="/addService" element={<Post />}></Route>
        <Route path="/services/:id" element={<Booking />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
        <Route path="/serviceManager" element={<ServiceManger />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
