import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Hero = () => {
  return <Wrapper className="section-center">
    <article className="content">
      <h1>
      Amazing things will happen when you listen to the consumers
      </h1>
      <p>Communication is a two-way street. We spend a lot of time strategizing what we say to our customers, but we need to spend just as much time listening to understand our customers.</p>
      <Link to="/products" className="btn hero-btn">shop now</Link>
    </article>
    
    <article className="img-container">
      <img src='https://www.logisticsinsider.in/wp-content/uploads/2020/12/e-commerce.jpg' alt="nice table" className="main-img" />
      <img src='https://www.foodbusinessnews.net/ext/resources/2022/08/23/SkuView_Lead.jpg?t=1661261146&width=1080' alt="person working" className="accent-img" />
    </article>
  </Wrapper>
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
    //animation: typing 10s  forwards;
  }
  //@keyframes typing{
  //   from {width: 0}
  //  to { width: 100%}
  //}
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`

export default Hero
