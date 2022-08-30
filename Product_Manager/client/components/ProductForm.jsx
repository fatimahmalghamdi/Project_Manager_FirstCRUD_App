import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function ProductForm (props){
    
    const [productInfo, setProductInfo] = useState({
        pro_title: "",
        pro_price: 0,
        pro_desc: ""
    })

    //fetch all products:
    const [productList, setProductList] = useState([])
    React.useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then(res => setProductList(res.data.products))
            .catch(err => console.log(err))
    }, [])

    //update the state upon the entry of inputs:
    const handleChange = (event) => {
        setProductInfo({...productInfo, [event.target.name]: event.target.value})
    }

    //handle the submit:
    const handlesubmit = e =>{
        e.preventDefault();
        //make the post request to create new product:
        axios.post("http://localhost:8000/api/product/new", productInfo)
            .then(res => setProductList([...productList, productInfo]))
            .catch(err => console.log(err))
    }
    
    return (
        <div style={{ margin: "auto", width: "700px"}}>

            <form onSubmit={handlesubmit}>
                <div>
                    <label>Title: </label>
                    <input type="text" name="pro_title" value={productInfo.pro_title} onChange={handleChange} />
                </div>
                <div>
                    <label>Price: </label>
                    <input type="text" name="pro_price" value={productInfo.pro_price} onChange={handleChange} />
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text" name="pro_desc" value={productInfo.pro_desc} onChange={handleChange} />
                </div>
                <div>
                    <button>submit</button>
                </div>
            </form>

            <div style={{ marginBottom: "20px"}}></div>

            <div style={{ margin: "auto", width: "700px"}}>
                <table width= "100%" style={{border: "2px solid black"}}>
                    <thead style={{backgroundColor: "lightblue"}}>
                        <tr>
                            <td>Title</td>
                        </tr>
                    </thead>
                    <tbody>
                        {productList.map((product,i) => (
                            <tr key={product._id}>
                                <td> <Link to={`/display/${product._id}`}>{product.pro_title}</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );

}

export default ProductForm;