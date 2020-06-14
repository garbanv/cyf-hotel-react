import React from "react";
import moment from "moment";

export default function SearchResults({ results }) {
  function getDays(dateA, dateB) {
    return dateB.diff(dateA, "days");
  }
  return (
    <div className="container pt-1">
      <h3 className="text-center mb-5">Search Results</h3>
      <table className="table mb-5">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">FirstName</th>
            <th scope="col">SurName</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check in</th>
            <th scope="col">Check out</th>
            <th scope="col">Nights</th>
          </tr>
        </thead>
        <tbody>
          {results.map(function(result, index) {
            return (
              <tr key={index}>
                <th scope="row">{result.id}</th>
                <td>{result.title}</td>
                <td>{result.firstName}</td>
                <td>{result.surname}</td>
                <td>{result.email}</td>
                <td>{result.roomId}</td>
                <td>{result.checkInDate}</td>
                <td>{result.checkOutDate}</td>
                <td>
                  {getDays(
                    moment(result.checkInDate),
                    moment(result.checkOutDate)
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
