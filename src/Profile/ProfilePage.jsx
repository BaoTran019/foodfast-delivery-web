import { useContext } from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap"
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthenticationContext";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { OrderContext } from "../context/OrderContext";
import './ProfilePage.css'
import avatar from '../assets/avatar/chicken_avatar.jfif'

function ProfilePage() {

    const { user } = useContext(UserContext)
    const { logOut } = useContext(AuthContext)
    const { removeAllItems } = useContext(CartContext)
    const { orders } = useContext(OrderContext)

    const completedCount = orders.filter(order => order.status === "Completed").length;

    const navigate = useNavigate()

    const handleLogOut = () => {
        toast.warning('Đã đăng xuất')
        removeAllItems()
        logOut();
        navigate('/')
        window.scrollTo(0, 0)
    }

    return (
        <Container>
            <Row className="user-content"
                style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                <Col xl={4} xs={12} className="user-avatar" style={{ textAlign: 'center', marginBlock: 'auto' }}>
                    <Image
                        roundedCircle
                        src={avatar}
                        style={{ height: '300px' }}>
                    </Image>
                </Col>
                <Col xl={8}>
                    <Form>
                        <Form.Group>
                            <Form.Label>
                                Họ tên
                            </Form.Label>
                            <Form.Control type="text" value={user.name}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Số điện thoại
                            </Form.Label>
                            <Form.Control type="text" value={user.phone}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Địa chỉ
                            </Form.Label>
                            <Form.Control type="text" value={user.address}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Mật khẩu
                            </Form.Label>
                            <Form.Control type="password" value={user.password}></Form.Control>
                        </Form.Group>
                        <Button style={{ marginTop: '20px', position: 'right' }}>Chỉnh sửa thông tin</Button>
                    </Form>
                    <div style={{ marginTop: '30px', fontSize: 'xx-large', fontWeight: 'lighter' }}>
                        Tổng số đơn hàng bạn đã đặt:
                        <span style={{ color: '#ff6600', fontWeight: 'bold', fontSize: '3rem' }}>
                            {completedCount}
                        </span>
                        <NavLink style={{ marginLeft: '10px', fontSize: 'large', fontWeight: 'bold', color: '#ff6600' }}>Xem chi tiết</NavLink>
                    </div>
                    <Button onClick={() => handleLogOut()}>Log out</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default ProfilePage
