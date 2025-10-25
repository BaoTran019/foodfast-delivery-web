import './OrderCard.css'

function OrderCard({ order }) {

  const renderStatus = () => {
    if (order.status==='new-orders') return <h5 style={{ fontWeight: 'lighter', color:'rgb(218, 0, 218)' }}>{order.status}</h5>
    else if (order.status==='in-progress') return <h5 style={{ fontWeight: 'lighter', color:'rgb(242, 145, 0)' }}>{order.status}</h5>
    else if (order.status==='ready') return <h5 style={{ fontWeight: 'lighter', color:'rgb(70, 133, 231)' }}>{order.status}</h5>
    else if (order.status==='completed') return <h5 style={{ fontWeight: 'lighter', color:'rgb(0, 187, 12)' }}>{order.status}</h5>
  }

  return (
    <div className={`order-card ${order.status}`} style={{ display: 'flex', alignItems: 'center' }}>
        <h4><span style={{ fontWeight: 'lighter' }}>Order id: </span>#{order.orderId}</h4>
        <h6 style={{marginInline:'0.8rem'}}>•</h6>
        <h6 style={{ fontWeight: 'lighter' }}><span>Date: </span>{order.date}</h6>
        <h6 style={{marginInline:'0.8rem'}}>•</h6>
        <h6 style={{ fontWeight: 'lighter' }}>{order.payment_method}</h6>
        <h6 style={{marginInline:'0.8rem'}}>•</h6>
        {renderStatus()}
    </div>
  )
}

export default OrderCard
