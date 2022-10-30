import React, {useEffect,  useState} from 'react';
import styled from 'styled-components';
import 'react-icons/fa'
import axios from "axios";
import {FaUserCircle} from "react-icons/all";



const Feeds = () => {


    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3001/feeds')
            .then(response => {
                console.log(response)
                setData(response.data)
            })
    })
    return(
        <Wrapper>
            <div className='test1'><h1>What users say about us!

            </h1></div>
            <div className="testimonial-box-container">
            {/*{loading ? (*/}
            {/*    <div>Loading...</div>*/}
            {/*) : error ? (*/}
            {/*    <div>{error}</div>*/}
            {/*) : (*/}
                { (
                data.map((msg) => (
                        <div className="testimonial-box">
                            <div className="box-top">
                                <div className="profile">
                                    <div className="profile-img">
                                        <FaUserCircle className='icon'/>
                                    </div>

                                    <div className="name-user">
                                        <strong>{msg.id}</strong>
                                        <span>@{msg.id}</span>
                                    </div>
                                </div>

                            </div>

                            <div className="client-comment">
                                <p>{msg.msg}</p>
                            </div>
                        </div>

                ))
            )}
        </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`

  .test1 {
    display: flex;
    letter-spacing: 1px;
    margin: 10px 25% 0 25%;
    padding: 10px 20px;

    align-content: center;

    h1 {
      font-size: 2.2rem;
      font-weight: 500;
      background-color: var(--clr-primary-5);
      color: var(--clr-primary-10);
      padding: 10px 20px;

    }
  }

  
  .testimonial-box-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }

  .testimonial-box {
    width: 500px;
    box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.1);
    background-color: var(--clr-primary-7);
    padding: 20px;
    margin: 15px;
    cursor: pointer;
  }

  .profile-img {
    width: 50px;
    height: 50px;
    overflow: hidden;
    margin-right: 10px;
  }

  .icon {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }

  .profile {
    display: flex;
    align-items: center;
  }

  .name-user {
    display: flex;
    flex-direction: column;
  }

  .name-user strong {
    color: #3d3d3d;
    font-size: 1.1rem;
    letter-spacing: 0.5px;
  }

  .name-user span {
    color: #979797;
    font-size: 0.8rem;
  }


  .box-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .client-comment p {
    font-size: 0.9rem;
    color: #4b4b4b;
  }

  .testimonial-box:hover {
    transform: translateY(-10px);
    transition: all ease 0.3s;
  }
`;

export default Feeds;