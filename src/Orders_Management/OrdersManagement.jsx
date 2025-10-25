import OrderCard from "./OrderCard/OrderCard"
import { Container } from "react-bootstrap"
import { OrderContext } from "../context/OrderContext"
import { useContext } from "react"

function OrdersManagement() {

    const { filterOrders } = useContext(OrderContext)
    const orders = filterOrders()

    return (
        <Container style={{paddingBlock:'20vh'}}>
            <div style={{background:'white', borderRadius:'15px', padding:'25px'}}>
            {orders.map((order) => (
                <OrderCard order={order}></OrderCard>
            ))}
            </div>
        </Container>
    )
}

export default OrdersManagement
