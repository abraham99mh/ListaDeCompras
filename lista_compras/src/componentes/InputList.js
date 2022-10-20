import React, { useState } from 'react';

const InputList = (props) => {

    const [element, setElement] = useState("");


    const onChange = (e) => {
        setElement(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (element === "") {
            props.setToast(true);
        }
        else {
            props.onElements([...props.elements, element]);
            setElement("");
        }
        console.log(props.elements);
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Introduzca nuevo elemento"
                        name='element'
                        id='element'
                        value={element}
                        onChange={onChange}
                    />
                    <button className="btn btn-danger" type="submit" id="btnGuardar">Agregar</button>
                </div>
            </form>
        </>
    );
}

export default InputList;