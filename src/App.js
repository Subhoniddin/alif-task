import "./App.css";
import { React } from "react";
import Header from "./Componnets/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../src/Page/MainPage";
import Users from './Componnets/Users/Users';
import Photos from './Componnets/Photos/Photos';
import Posts from './Componnets/Posts/Posts';


function App() {
  return (
    <Router>
      <div className="App-wrapper">
        <Header exact />

        <div className="content">
          <Routes>
            <Route path="/home" element={<MainPage />} />
            <Route exact path="posts" element={<Posts/>} />
            <Route path="users" element={<Users />} />
            <Route path="photos" element={<Photos />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
