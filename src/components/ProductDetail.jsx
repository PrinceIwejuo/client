import React, {  useState, useEffect }from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const ProductDetail = () => {
    const {_id} = useParams();

const [info, setInfo] = useState({})

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
    
    

    return(
        <div>
            <h3>{info.Title}</h3>
            <p>${info.Price}</p>
            <p>{info.Description}</p>
        </div>
    )
}

export default ProductDetail