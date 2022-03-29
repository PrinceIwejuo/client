import axios from "axios";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

const EditProductForm = (props) => {

    // let [Title, setTitle] = useState("");
    // let [Price, setPrice] = useState(null);
    // let [Description, setDescription] = useState("");

    let [productInfo, setProductInfo] = useState({})

    let {_id} = useParams();

    const history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${_id}`)
        .then(res=>{
            console.log(res);
            setProductInfo(res.data.results)
        })
        .catch(err=>{
            console.log("error", err)
        })
    },[])

    const changeHandler = (e)=>{
        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        })
    }

    const editProduct = (e)=>{
        e.preventDefault();

        axios.put(`http://localhost:8000/api/products/${_id}`, productInfo)
            .then(res=>{
                console.log("response", res)
                history.push('/')
            })
            .catch((err=>{
                console.log("error", err)
            }))

        
    }

    return(
        <div>
            <p>Editing: {_id}</p>
            <form onSubmit={editProduct}>
                <div className="form-group">
                    <label htmlFor="">Title:</label>
                    <input type="text" name="Title" className="form-control" onChange={changeHandler} value={productInfo.Title}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Price:</label>
                    <input type="int" name="Price" id="" className="form-control" onChange={changeHandler} value={productInfo.Price}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description:</label>
                    <input type="text" name="Description" id="" className="form-control" onChange={changeHandler} value={productInfo.Description}/>
                </div>
                <input type="submit" value="Update Product" />
            </form>
        </div>
    )
    }

export default EditProductForm;