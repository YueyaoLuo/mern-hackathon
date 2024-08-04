import "./OrderListItem.css";

export default function OrderListItem({ orderItem }) {
  return (
    <div className="OrderListItem">
      <div className="line">
        <div className="id">Order Id: {orderItem.orderId}</div>
        <div className="date">
          {new Date(orderItem.createdAt).toLocaleDateString("en-US")}
        </div>
      </div>
      <div className="line">
        <div className="price">${orderItem.orderTotal}</div>

        <div className="itemNumber">{orderItem.orderQty} items</div>
      </div>
    </div>
  );
}
