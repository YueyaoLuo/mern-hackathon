import './OrderLineItem.css';

export default function OrderLineItem({ OrderLineItem, isPaid, handleChangeQty }) {
  return (
    <div className="OrderLineItem">
      <div className="flex-ctr-ctr">{OrderLineItem.item.emoji}</div>
      <div className="flex-ctr-ctr flex-col">
        <span className="align-ctr">{OrderLineItem.item.name}</span>
        <span>{OrderLineItem.item.price.toFixed(2)}</span>
      </div>
      <div className="qty" style={{ justifyContent: isPaid && 'center' }}>
      
        <span>{OrderLineItem.qty}</span>
        
      </div>
      <div className="ext-price">${OrderLineItem.extPrice.toFixed(2)}</div>
    </div>
  );
}