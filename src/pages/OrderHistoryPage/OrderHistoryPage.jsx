import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./OrderHistoryPage.css";
import Logo from "../../components/Logo/Logo";
import UserLogOut from "../../components/UserLogOut/UserLogOut";
import OrderDetail from "../../components/OrderDetail/OrderDetail";
import OrderList from "../../components/OrderList/OrderList";
import * as ordersAPI from "../../utilities/orders-api";

export default function OrderHistoryPage({ user, setUser }) {
  const [orderItems, setOrderItems] = useState([])
  useEffect(function(){
    async function getOrders() {
      const orders = await ordersAPI.getAllOrders()
      setOrderItems(orders)
    }
    getOrders()
  }, [])
  return (
    <main className="OrderHistoryPage">
      <aside>
        <Logo />
        <Link to="/orders/new" className="button btn-sm">
          NEW ORDER
        </Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <OrderList orderItems={orderItems}/>
      
      <OrderDetail />
      {/* Render the existing OrderDetail component */}
    </main>
  );
}
