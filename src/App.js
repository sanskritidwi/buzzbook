import {React,useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import Employee from './components/Employee';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {

  return (
    <div>
     <Header/>
     <Employee/>
     <Footer/>
    </div>
  );
}

export default App;
