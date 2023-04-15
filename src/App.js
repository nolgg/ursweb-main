import Header from "./component/Header";
import Home from "./component/Home";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/auth/Login.js";
import SignUp from "./component/auth/Signup.js";
import Addp from "./component/auth/Addp.js";
import firebase from '././fbConfig.js';
import Result2 from './component/auth/resultdoctor2.js';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// import SignIn from './component/auth/Ssystem.js';
//import SignUp from './component/auth/Ssystem.js';

// import Banner from './components/Banner'
// import Content from './components/Content'
// import CTA from './components/CallToAction'
// import Footer from './components/Footer'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<><Header /><Home /></>} />
        <Route path="/create" element={<><Addp /><Header /></>} />
        <Route path="/showdoc" element={<><Header /><Result2 /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
