import React from "react";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import SplineComponent from '@splinetool/react-spline';

function Spline() {
  return (
    <SplineComponent className='spline' scene="https://prod.spline.design/GfwlPtz3xdqVdihc/scene.splinecode" />
  );
}

export default function App() {
  return (
<div>
    <div className="info-container">
      <NavBar />
      <Main />
    </div>
   
    <Spline />
</div>
  )
}
