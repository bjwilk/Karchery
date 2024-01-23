import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage"; // Import your HomePage component
import Booking from "./Booking"; // Import your Booking component

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Fragment>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Booking" element={<Booking />} />
          </Routes>
        </Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
