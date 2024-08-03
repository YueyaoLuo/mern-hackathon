import "./OrderListItem.css";

export default function OrderListItem({ orderItem }) {
  return (
    <div className="OrderListItem">
      <div className="line">
        <span className="id">Order Id: {orderItem.orderId}</span>
        <span className="price">${orderItem.orderTotal}</span>
      </div>
      <div className="line">
        <span className="date">
          {new Date(orderItem.createdAt).toLocaleDateString("en-US")}
        </span>
        <span className="itemNumber">{orderItem.orderQty} items</span>
      </div>
    </div>
  );
}
