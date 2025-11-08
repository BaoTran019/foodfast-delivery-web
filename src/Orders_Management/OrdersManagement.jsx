import OrderCard from "./OrderCard/OrderCard"
import { Container } from "react-bootstrap"
import { OrderContext } from "../context/OrderContext"
import { useContext } from "react"

function OrdersManagement() {

    const { orders } = useContext(OrderContext)
    console.log(orders)

    return (
        <Container style={{paddingBlock:'18vh'}}>
            <div style={{background:'white', borderRadius:'15px', padding:'20px'}}>
            {orders.map((order) => (
                <OrderCard order={order}></OrderCard>
            ))}
            </div>
        </Container>
    )
}

export default OrdersManagement
