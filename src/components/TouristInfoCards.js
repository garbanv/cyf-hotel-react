import React from "react";

export default function TouristInfoCards() {
  const cities = [
    {
      city: "Glasgow",
      img:
        "https://images.unsplash.com/photo-1571494146906-86de15d3817b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=980&q=80",
      url: "http://peoplemakeglasgow.com"
    },
    {
      city: "Manchester",
      img:
        "https://images.unsplash.com/photo-1515586838455-8f8f940d6853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=984&q=80",
      url: "http://visitmanchester.com"
    },
    {
      city: "London",
      img:
        "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      url: "http://visitlondon.com"
    }
  ];
  return (
    <div className="container mt-5">
      <div className="row">
        {cities.map(function(city, index) {
          return (
            <div className="col-md-4" key={index}>
              <div className="card">
                <img src={city.img} className="card-img-top" alt={city.city} />
                <div className="card-body">
                  <a href={city.url} className="btn btn-dark" target="_blank">
                    Go to {city.city}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
