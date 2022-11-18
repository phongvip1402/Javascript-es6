import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Main from './Demo/Main'

export default function App() {

  return (
    <div>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
    </div>
  );
  // function Home() {
  //   return (
  //     <div>
  //       <main>
  //         <h2>Welcome to the homepage!</h2>
  //       </main>
  //       <nav>
  //         <Link to="/about">About</Link>
  //       </nav>
  //     </div>
  //   );
  // }
  
  // function About() {
  //   return (
  //     <div>
  //       <main>
  //         <h2>Who are we?</h2>
  //         <p>
  //           React Router is a lightweight, fully-featured routing library for the React JavaScript library
  //         </p>
  //       </main>
  //       <nav>
  //         <Link to="/">Home</Link>
  //       </nav>
  //     </div>
  //   );
  // }
}