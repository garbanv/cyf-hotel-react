import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
// import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const search = searchVal => {
    // console.info("TO DO!", searchVal);

    if (!searchVal) {
      getBookings();
    } else {
      const newVal = bookings.filter(function(name) {
        return (
          name.firstName.toLowerCase() === searchVal.toLowerCase() ||
          name.surname.toLowerCase() === searchVal.toLowerCase()
        );
      });
      setBookings(newVal);
      return newVal;
    }
  };

  useEffect(() => {
    getBookings();
  }, []);

  const getBookings = () => {
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(data => {
        setBookings(data);
        bookings ? setLoading(false) : setLoading(true);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {loading ? (
          <div className="text-center my-5">
            <img src="https://lh3.googleusercontent.com/proxy/dWsQWYbaiwLjj3XeGJ2NhE21ehGLHEZ1mbvRIwRlop2T2X7MWUwKMTogOKh-f7ZVB73Jywxv5cJRrLl_7jEkoP_ALeNK2-0SjREBOrsJUsJcY_UmuQ" />
          </div>
        ) : (
          <SearchResults results={bookings} />
        )}
      </div>
    </div>
  );
};

export default Bookings;
