import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom"


function Details (props) {
    const { product_id } = useParams();
    const [productDetails, setProductDetails] = useState({})
    const { handledeleteFromDom } = useParams();
    const history = useHistory();

    //fetch the product by id:
    React.useEffect(() => {
        axios.get("http://localhost:8000/api/product/"+ product_id)
            .then(res => setProductDetails(res.data.product[0]))
            .catch(err => console.log(err))
    }, [])

    //handle the delete button:
    function handledelete(product_id){
        axios.delete("http://localhost:8000/api/product/delete/"+product_id)
            .then(res => {
                history.push("/");
            })
    }

    return (
        
        <div style={{ margin: "auto", width: "700px"}}>
            <h4>Title: {productDetails.pro_title} </h4>
            <h4>Price: {productDetails.pro_price} </h4>
            <h4>Description: {productDetails.pro_desc} </h4>
            <button onClick={() => handledelete(productDetails._id)}>Delete</button>
            <p>
                <Link to={"/product/"+ productDetails._id +"/update"}>Edit</Link>
            </p>
            <p>
            <Link to="/">Back</Link>
            </p>
        </div>
    );

}

export default Details;