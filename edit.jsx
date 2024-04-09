import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function EditPage() {
    const location = useLocation();
    const Navigate=useNavigate()
    const [updatedProduct, setUpdatedProduct] = useState({
        id: location.state.id,
        title: location.state.title,
        price: location.state.price,
        qty: location.state.qty
    });

    const saveClick = () => {
       
        Navigate("/",{state:updatedProduct})
        console.log(updatedProduct,"0")
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <>
            <dl>
                <dt>Product Name</dt>
                <input type="text" name="title" value={updatedProduct.title} onChange={handleChange}></input>
                <dt>Price</dt>
                <input type="text" name="price" value={updatedProduct.price} onChange={handleChange}></input>
                <dt>Qty</dt>
                <input type="text" name="id" value={updatedProduct.id} onChange={handleChange}></input>
            </dl>
            <button onClick={saveClick}>Save</button>
        </>
    );
}
