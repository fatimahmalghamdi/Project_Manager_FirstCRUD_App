import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {useParams} from "react-router"

function DisplayProduct (props) {
    const [productList, setProductList] = useState([])

    React.useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then(res => setProductList(res.data.products))
            .catch(err => console.log(err))
    }, [])

    // function handledelete(product){
    //     axios.delete("http://localhost:8000/api/product/delete/"+product._id)
    //         .then(res => {
    //             setProductList(productList.filter((u) => u._id !== product._id));
    //         })
    // }


    return (
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
    );

}

export default DisplayProduct;