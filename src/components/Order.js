import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

export default function Order({ orderType }) {
  const [orders, setOrders] = useState(0);
  // const pizzas = 0;

  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <li>
      {orderType}: {orders} <RestaurantButton orderOne={orderOne} />
    </li>
  );
}
