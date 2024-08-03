import OrderListItem from '../OrderListItem/OrderListItem';
import './OrderList.css'

export default function OrderList({orderItems}){
    const orders = orderItems.map(item => <OrderListItem orderItem={item}/>)
    orders.sort((a,b) => b.createdAt - a.createdAt)
    return (
        <main className="OrderList">
        {orders}
      </main> 
    )
}