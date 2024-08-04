import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./OrderHistoryPage.css";
import Logo from "../../components/Logo/Logo";
import UserLogOut from "../../components/UserLogOut/UserLogOut";
import OrderDetail from "../../components/OrderDetail/OrderDetail";
import OrderList from "../../components/OrderList/OrderList";
import * as ordersAPI from "../../utilities/orders-api";


export default function OrderHistoryPage({ user, setUser }) {
  const [orderItems, setOrderItems] = useState([]);
  const [activeOrder, setActiveOrder] = useState('');
  const orderRef = useRef([])

  useEffect(function () {
    async function getOrders() {
      const orders = await ordersAPI.getAllOrders();
      orderRef.current = [...orders.map(order => order.orderId)]
      setOrderItems(orders);
      setActiveOrder(orderRef.current[0]);
    }
    getOrders();
  }, []);


  return (
    <main className="OrderHistoryPage">
      <aside>
        <Logo />
        <Link to="/orders/new" className="button btn-sm">
          NEW ORDER
        </Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <OrderList orderItems={orderItems} activeOrder={activeOrder} setActiveOrder={setActiveOrder}/>

      <OrderDetail order={orderItems.find((order) => order.orderId === activeOrder)}/>
      
    </main>
  );
}
