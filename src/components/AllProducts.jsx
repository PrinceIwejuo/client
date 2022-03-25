import React, {useState, useEffect} from "react";
import axios from 'axios';
import {
    Link
  } from "react-router-dom"

const AllProducts = () => {

    let [productlist, setProductList] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then(res=>{
            console.log(res)
            setProductList(res.data.results)
        })
        .catch(err=>{
            console.log("err", err)
        })
    },[])

    
    return(
        <div>
            <h2>What we got in stock</h2>
            {
                productlist.map((productObj)=>{
                    return(
                        <div className="card" key={productObj._id}>
                            {/* <img className="card-img-top" src="/images/pathToYourImage.png" alt="Card image cap"/> */}
                            <div className="card-body">
                                <h4 className="card-title"><Link to={`details/${productObj._id}`}>{productObj.Title}</Link></h4>
                                <p className="card-text">
                                    Price: {productObj.Price} <br />
                                    Description: {productObj.Description}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllProducts