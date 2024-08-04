import OrderListItem from "../OrderListItem/OrderListItem";
import "./OrderList.css";

export default function OrderList({ orderItems, activeOrder, setActiveOrder }) {
  console.log("active order is", activeOrder)
  const orders = orderItems.map((order) => (
    <li
      className={order.orderId === activeOrder ? "active" : ""}
      onClick={() => setActiveOrder(order.orderId)}
    >
      
      <OrderListItem orderItem={order} />
      
    </li>
  ));

  return <ul className="OrderList">{orders}</ul>;
}
