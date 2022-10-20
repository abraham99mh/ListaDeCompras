import React from 'react'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const ToastInput = (props) => {

    const onClose = () => {
        props.setToast(false)
    };

    return (
        <ToastContainer className='text-center p-4' position="bottom-end">
            <Toast className='text-bg-danger' onClose={onClose} show={props.showToast} delay={3000} autohide>
                <Toast.Body>Campo vacío</Toast.Body>
            </Toast>
        </ToastContainer>
    );
}

export default ToastInput;