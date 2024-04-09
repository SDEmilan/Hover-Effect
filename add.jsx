import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router";
export default function Addproduct(){
    const Navigate=useNavigate()
    const [product1,setProduct1]=useState([])

    const [product,setProduct]=useState(
        {
            productName:"",
            price:"",
            qty:0,
            image:""

        }
    )
    const valueChange=(e)=>{
          const{name,value}=e.target;
          setProduct({...product,[name]:value})
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setProduct((prevInputs) => ({
          ...prevInputs,
          image: URL.createObjectURL(file),
        }));
      };
    const submitClick=()=>{
        console.log(product,"product")

        Navigate("/",{state:product})
        
        
        
    }
    return(
        <>
           <dl>
           <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
                <dt>Product name</dt>
                <input type="text" onChange={valueChange} name="productName" value={product.productName}></input>
                <dt>Price</dt>
                <input type="text" onChange={valueChange}  name="price" value={product.price}></input>
                <dt>Qty</dt>
                <input type="number" onChange={valueChange} name="qty" value={product.qty}></input>

           </dl>
           <button type="submit" onClick={submitClick}>Add</button>
               
        </>
    )
}