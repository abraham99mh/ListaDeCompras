import React, { useState } from 'react'
import Card from './Card';
import Title from './Titulo';
import ToastInput from './Toast';

const App = () => {

    const [showToast, setToast] = useState(false);

    return (
        <>
            <ToastInput showToast={showToast} setToast={setToast} />
            <div className='container py-3'>
                <Title />
                <Card setToast={setToast} />
            </div>
        </>
    );
}

export default App;