import { useNavigate,useLocation } from "react-router-dom";
import { useState,useEffect } from "react";

export default function Mainpage() {
    const [product, setProduct] = useState([]);
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state, "in main");

    

    const fetchProduct = async () => {
        try {
            const res = await fetch("https://dummyjson.com/products");
            const Products = await res.json();
            setProduct(Products.products);   
        } catch (error) {
            setMsg("Something went wrong");
        }
    };
    useEffect(() => {
       
        fetchProduct();
    }, []);

    const deleteClick = (id) => {
        const update = product.filter((item) => item.id !== id);
        setProduct(update);
    };

    const editClick = (item) => {
        navigate("/editPage", { state: item });
    };

    // useEffect(() => {
    //     if (location.state) {
    //         setProduct([...product, location.state]);
           
    //     }
    //     console.log(product,"00")
    // }, [location.state]);

    return (
        <>
            <h1>Products Page</h1>
            <button onClick={() => navigate("/addProduct")}>Add product</button>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap" }}>
                {msg ? (
                    <p>Something went wrong</p>
                ) : (
                    <>
                        {product.length > 0 ? (
                            <>
                                {product.map((item, index) => {
                                    return (
                                        <div key={index} style={{ width: "300px", height: "400px", border: "1px solid red", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", flexDirection: "column", gap: "-10px" }}>
                                            {item.image ? <img src={item.image} height="200px" width="200px" alt={item.title} /> : <img src={item.thumbnail} height="200px" width="200px" alt={item.title} />}
                                            <h3>{item.title}</h3>
                                            <p>Price: {item.price}</p>
                                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
                                                <button onClick={() => deleteClick(item.id)}>Delete</button>
                                                <button>+</button><br />
                                                <button>-</button>
                                                <button onClick={() => editClick(item)}>Edit</button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </>
                        ) : (
                            <p>No products available</p>
                        )}
                    </>
                )}
            </div>
        </>
    );
}
