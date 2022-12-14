import React, { useState } from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import {Link} from "react-router-dom";
import Confirm from "./Confirm";




const AddProduct = () => {
    const [inputs, setInputs] = useState({});

    const [submitted,setSubmitted]= useState(false);
    const handleChange = (event) => {

        const name = event.target.name;
        // const value=null;
        // if(event.target.name==='color')
        //     value="#fff";
        const value = (event.target.name==='price'||event.target.name==='stock')?parseInt(event.target.value):event.target.value;
        
    
        setInputs((values) => ({ ...values, [name]: value }));


    };

    const handleSubmit = (event) => {
        setSubmitted(true)
        return fetch('http://localhost:3001/data', {
            method: 'POST',
            body: JSON.stringify(inputs),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
        

    };
    if(submitted===false) {
        return (
            <Wrapper>


                <PageHero title="add product"/>
                
                
                <form onSubmit={handleSubmit} className="add">
                <div className="headingid"><h2 >Let's Add a new Product</h2></div>
                    <div className='form-item'>
                        <label className="labelid">ID</label>
                        <input name="id" value={inputs.id} required onChange={handleChange}/>
                    </div>
                    <div className='form-item'>
                        <label className="labelid">Name</label>
                        <input name="name" value={inputs.name} required onChange={handleChange}/>
                    </div>
                    <div className='form-item'>
                        <label className="labelid">Price</label>
                        <input
                            name="price"
                            value={inputs.price}
                            type="number"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-item'>
                        <label className="labelid">Description</label>
                        <input name="description" value={inputs.description} required onChange={handleChange}
                               aria-expanded/>
                    </div>
                    <div className='form-item'>
                        <label className="labelid">Image</label>
                        <input
                            name="image"
                            value={inputs.image}
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-item'>
                        <label className="labelid">Category</label>
                        <input
                            name="category"
                            value={inputs.category}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-item'>
                        <label className="labelid">Company</label>
                        <input
                            name="company"
                            value={inputs.brand}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-item'>
                        <label className="labelid">Stocks</label>
                        <input
                            name="stock"
                            value={inputs.stock}
                            type="number"
                            onChange={handleChange}
                        />
                    </div>
                    {/* <div className='form-item-1'>
                        <label>Color</label>
                        <input
                            name="stock"
                            value={inputs.color}
                            onChange={handleChange}
                        />
                    </div> */}
                    <input type="submit" value="Upload Product" className='submit'
                    />
                </form>
            </Wrapper>
        );
    }
    else{
        return (<Confirm comp='product'/>)
    }
};


const Wrapper = styled.section`

  
  .headingid{
    color:black;
    align-items:center;
    justify-content:space-between;
    padding:25px;
    margin:20px 50px;
  }
  .add{
    margin-left:  25%;
    width: 50%;
  }
  .form-item input{
    position: relative;
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: var(--clr-primary-5);
    margin-bottom: 30px;
    //border: none;
    border: 2px solid #DADDEC;
    border-radius: 10px;
    //border-bottom: 1px solid var(--clr-primary-8);
    outline: none;
    background: transparent;
    box-sizing: border-box;
    box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
    
  }
  .form-item label{
    position: relative;
    left: 0;
    box-sizing: border-box;
    padding: 10px 0;
    font-size: 16px;
    color: var(--clr-primary-5);
    pointer-events:none;
    transition: 0.5s;
  }
  .submit{
    color: var(--clr-primary-10);
    background: var(--clr-primary-5);
    padding: 10px 0;
    border-radius: 10px;
    margin: 0 0 10% 40%;
    width:150px;
    border-color:white;
  }
`;
export default AddProduct;
