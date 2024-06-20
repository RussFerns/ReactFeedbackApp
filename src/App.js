/* eslint-disable */
import React from "react"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FeedbackProvider } from './context/FeedbackContext';
import Home from "./pages/Home";
import About from "./pages/About";
import Media from "./pages/Media";
import Select from "./pages/Select";
import Contact from "./pages/Contact";
import "./App.css";


function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home /> } > </Route>
          <Route exact path="/about" element={ <About /> } > </Route>
          <Route exact path="/media" element={<Media /> }></Route>
          <Route exact path="/select" element={<Select /> }></Route>
          <Route exact path="/contact" element={<Contact /> }></Route>
          <Route exact path="/contact/:id/:name" element={<Contact /> }></Route>
        </Routes>
      </Router>
    </FeedbackProvider>
  );
}

export default App;

