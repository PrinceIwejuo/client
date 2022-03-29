import React, {useState, useEffect} from "react";
import axios from 'axios';
import {
    Link
  } from "react-router-dom"

const AllProducts = (props) => {

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
    },[props.formSent])

    
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
                                <Link to={`/edit/${productObj._id}`} className="btn btn-success"> Edit {productObj.Title}</Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllProducts