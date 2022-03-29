import React, {  useState, useEffect }from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

const ProductDetail = () => {
    const {_id} = useParams();
    const [info, setInfo] = useState({})
    const history = useHistory();

useEffect(()=>{
    axios.get(`http://localhost:8000/api/products/${_id}`)
        .then(res=>{
            console.log(res)
            setInfo(res.data.results)
        })
        .catch(err=>{
            console.log(err)
        })
}, [])

const deleteProduct = () => {
    axios.delete(`http://localhost:8000/api/products/${_id}`)
        .then(res=>{
            console.log(res)
            history.push('/')
        })
        .catch(err =>{
            console.log("error", err)
        })
}


    return(
        <div>
            <h3>{info.Title}</h3>
            <p>{info.Price}</p>
            <p>{info.Description}</p>
            <button onClick = {deleteProduct} className="btn btn-danger">Delete {info.Title}</button>
        </div>
    )
}

export default ProductDetail