import React, { useState } from "react";

export default function CustomerProfile({ id }) {
  const [userProfile, setUserProfile] = useState({});

  fetch(`https://cyf-react.glitch.me/customers/${id}`)
    .then(response => response.json())
    // .then(resx=> console.log(resx))
    .then(res => setUserProfile(res));

  return (
    <div>
      <h3>Profile Id: {id}</h3>
      <p>Email: {userProfile.email}</p>
      <p>Telephone: {userProfile.phoneNumber}</p>
      <p>Vip: {userProfile.vip ? "Yes" : "No"}</p>
    </div>
  );
}
