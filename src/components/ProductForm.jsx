import axios from "axios";
import React, {useState} from "react";

const ProductForm = (props) => {

    let [Title, setTitle] = useState("");
    let [Price, setPrice] = useState(null);
    let [Description, setDescription] = useState("");

    const makeProduct = (e)=>{
        e.preventDefault();
        let productInfo ={Title, Price, Description};

        axios.post("http://localhost:8000/api/products", productInfo)
            .then(res=>{
                console.log(res)
                props.setFormSent(props.formSent)
                
                setTitle("");
                setPrice("");
                setDescription("");
            })
            
            .catch(err=>{
                console.log("error", err)
            })
    }

    return(
        <div>
            <form onSubmit={makeProduct}>
                <div className="form-group">
                    <label htmlFor="">Title:</label>
                    <input type="text" className="form-control" onChange={(e)=>{setTitle(e.target.value)}} value={Title}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Price:</label>
                    <input type="int" name="" id="" className="form-control" onChange={(e)=>{setPrice(e.target.value)}} value={Price}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description:</label>
                    <input type="text" name="" id="" className="form-control" onChange={(e)=>{setDescription(e.target.value)}} value={Description}/>
                </div>
                <input type="submit" value="Create Product" />
            </form>
        </div>
    )
}

export default ProductForm;