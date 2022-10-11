import React from 'react';
import {
  BrowserRouter as Router,
  Route, Routes,
} from "react-router-dom";
import './App.css';
import './Mobile_Styles.scss';
import Home from "./pages/Home";
import {Login} from "./pages/Login";
import {Blog} from "./pages/Blog";
import {Collection} from "./pages/Collection";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/login" element={<Login />}>
          </Route>
          <Route path="/blog" element={<Blog />}>
          </Route>
{/*          <Route path="/collection" element={<Collection />}>
          </Route>*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
