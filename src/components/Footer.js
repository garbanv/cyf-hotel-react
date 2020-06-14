import React from "react";

export default function Footer({ info }) {
  return (
    <div className="container bg-dark py-5">
      <ul>
        {info.map(function(inf, index) {
          return (
            <li className="text-white" key={index}>
              {inf}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
