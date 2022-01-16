import React,{useState,useEffect,Component} from 'react'

import UserName from './UserName'
import "./App.css"
// import User from './User'
// import Guest  from './Guset';
import swal from 'sweetalert';
import Home from './componants/Home';
import About from './componants/About';
import Contact from './componants/Contacts';

import Navbar from './componants/layout/navbar';
import AddUser from './componants/User/AddUser';

// import EditUser from './componants/User/Edit'; 
import axios from 'axios';
 
import {
  BrowserRouter as Router,Routes, Route,Link} from "react-router-dom";
import EditUser from './componants/User/Edit';

function App(){
  return(
      <Router>
        <div className='App'>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/user/adduser" element={<AddUser/>} />
            <Route exact path ="/user/edit/:id" element ={<EditUser/>}/>
          </Routes>

        </div>
      </Router>
  )
}

export default App;


