import React, { useState, useContext, useRef } from 'react'
import { Button, Form, FormControl, FormGroup, FormLabel, Modal, ModalBody, ModalHeader } from 'react-bootstrap'
import { UserContext } from '../context/UserContext'
import { toast } from 'react-toastify'

function ChangePasswordModal({ show, handleCloseModal }) {

    const { changePassword } = useContext(UserContext)

    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState({ newPassword: '', confirmPassword: '' })

    // Tạo ref để focus
    const newPwdRef = useRef(null)
    const confirmPwdRef = useRef(null)

    const handleChangePwd = async (e) => {
        e.preventDefault();
        let hasError = false;

        const newError = { newPassword: '', confirmPassword: '' }

        if (newPassword.trim() === '') {
            newError.newPassword = 'Vui lòng nhập mật khẩu mới'
            newPwdRef.current.focus()
            hasError = true
        }
        if (confirmPassword.trim() === '') {
            newError.confirmPassword = 'Vui lòng xác nhận mật khẩu'
            if (!hasError) confirmPwdRef.current.focus()
            hasError = true
        }

        // Kiểm tra trùng
        if (newPassword !== confirmPassword) {
            newError.confirmPassword = 'Mật khẩu xác nhận không trùng khớp'
            if (!hasError) confirmPwdRef.current.focus()
            hasError = true
        }

        setError(newError)

        if (hasError) return

        try {
            await changePassword(confirmPassword)
            toast.success('Đổi mật khẩu thành công')
            handleCloseModal()
        }
        catch (err) {
            toast.error('Đổi mật khẩu không thành công');
        }

    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleCloseModal}
                centered
                backdrop={true}
                keyboard={false}
                scrollable
                size="xl"
            >
                <ModalHeader closeButton>
                    Đổi mật khẩu mới
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleChangePwd}>
                        <FormGroup>
                            <FormLabel>Nhập mật khẩu mới</FormLabel>
                            <FormControl type='password'
                                value={newPassword}
                                ref={newPwdRef}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder='Nhập mật khẩu mới'
                                isInvalid={!!error.newPassword} />
                            <Form.Control.Feedback type="invalid">
                                {error.newPassword}
                            </Form.Control.Feedback>

                            <FormLabel>Xác nhận lại mật khẩu</FormLabel>
                            <FormControl type='password'
                                value={confirmPassword}
                                ref={confirmPwdRef}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder='Nhập lại mật khẩu 1 lần nữa'
                                isInvalid={!!error.confirmPassword} />
                            <Form.Control.Feedback type="invalid">
                                {error.confirmPassword}
                            </Form.Control.Feedback>
                        </FormGroup>
                        <Button style={{marginTop:'10px'}} type='submit'>Đổi mật khẩu</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </>
    )
}

export default ChangePasswordModal
