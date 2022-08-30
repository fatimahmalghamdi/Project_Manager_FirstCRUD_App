import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";


function UpdateProduct(props){
    const {product_id} = useParams();
    const [updateProduct, setUpdateProduct] = useState({})

    //fetch the product by id:
    React.useEffect(() => {
        axios.get("http://localhost:8000/api/product/"+product_id)
            .then(res => setUpdateProduct(res.data.product[0]))
            .catch(err => console.log(err))
    }, [])

    //update the state upon the entry of inputs:
    const handleChange = (event) =>{
        setUpdateProduct({...updateProduct, [event.target.name]: event.target.value })
    }

    //handle the submit:
    const handlesubmit = e =>{
        e.preventDefault();
        //make the post request to create new product:
        axios.put("http://localhost:8000/api/product/update/"+product_id, updateProduct)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return(
        <div style={{ margin: "auto", width: "700px"}}>
            <form onSubmit={handlesubmit}>
                <div style={{marginBottom: "20px"}}>
                    <label>Title: </label>
                    <input type="text" name="pro_title" value={updateProduct.pro_title} onChange={handleChange} />
                </div>
                <div style={{marginBottom: "20px"}}>
                    <label>Price: </label>
                    <input type="text" name="pro_price" value={updateProduct.pro_price} onChange={handleChange} />
                </div>
                <div style={{marginBottom: "20px"}}>
                    <label>Description: </label>
                    <input type="text" name="pro_desc" value={updateProduct.pro_desc} onChange={handleChange} />
                </div>
                <div style={{marginBottom: "20px"}}>
                    <button>submit</button>
                </div>
            </form>
            <div style={{marginTop: "20px"}}>
            <Link to="/">Back</Link>
            </div>
        </div>
    );

}

export default UpdateProduct;