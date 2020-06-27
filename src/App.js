import React from "react";

import Bookings from "./components/Bookings";
import Header from "./components/Header";
import TouristInfoCards from "./components/TouristInfoCards";
import Footer from "./components/Footer";
import SearchResults from "./components/SearchResults";
import Restaurant from "./components/Restaurant";
import "./App.css";

const App = () => {
  const info = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];

  return (
    <div className="App">
      <Header />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer info={info} />
    </div>
  );
};

export default App;
