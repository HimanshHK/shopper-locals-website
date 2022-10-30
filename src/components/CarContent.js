import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
// import CartColumns from './CartColumns';
// import CartItem from './CartItem';
// import CartTotals from './CartTotals';
import {formatPrice} from "../utils/helpers";
import AmountButtons from "./AmountButtons";
import {FaShoppingCart, FaTrash, FaUserMinus, FaUserPlus} from "react-icons/fa";
import {useProductsContext} from "../context/products_context";
import {useUserContext} from "../context/user_context";

const CartItem = ({ id, image, name,company, price, amount }) => {
    const { removeItem, toggleAmount } = useCartContext();
    const increase = () => {
        toggleAmount(id, 'inc');
    };

    const decrease = () => {
        toggleAmount(id, 'dec');
    };

    return (
        <Wrapper className='items'>
            <div className='title'>
                <img src={image} alt={name} />

                <div>
                    <h5 className='name'>{name}</h5>
                    <p className='color'>
                        brand : <span> {company}</span>
                    </p>
                    <h5 className='price-small'>{formatPrice(price)}</h5>
                </div>
            </div>
            <h5 className='price'>{formatPrice(price)}</h5>
            <AmountButtons amount={amount} increase={increase} decrease={decrease} />
            <h5 className='subtotal'>{formatPrice(price * amount)}</h5>
            <button type='button' className='remove-btn' onClick={() => removeItem(id)}>
                <FaTrash />
            </button>
        </Wrapper>
    );
};




const CartColumns = () => {
    return (
        <Wrapper className='columns'>
            <div className='content'>
                <h5>item</h5>
                <h5>price</h5>
                <h5>quantity</h5>
                <h5>subtotal</h5>
                <span></span>
            </div>
            <hr />
        </Wrapper>
    );
};


const CartTotals = () => {
    const { total_amount, shipping_fee } = useCartContext();
    const { myUser, loginWithRedirect } = useUserContext();

    return (
        <Wrapper className='totals'>
            <div>
                <article>
                    <h5>
                        subtotal : <span>{formatPrice(total_amount)}</span>
                    </h5>
                    <p>
                        shipping fee : <span>{formatPrice(shipping_fee)}</span>
                    </p>
                    <hr />
                    <h4>
                        order total : <span>{formatPrice(total_amount + shipping_fee)}</span>
                    </h4>
                </article>
                {myUser ? (
                    <Link to='/checkout' className='btn'>
                        proceed to checkout
                    </Link>
                ) : (
                    <button className='btn' type='button' onClick={loginWithRedirect}>
                        login
                    </button>
                )}
            </div>
        </Wrapper>
    );
};



const CartContent = () => {
    const { cart, clearCart } = useCartContext();
    return (
        <Wrapper className='section section-center'>
            <CartColumns />
            {cart.map((item) => {
                return <CartItem key={item.id} {...item} />;
            })}
            <hr />
            <div className='link-container'>
                <Link to='/products' className='link-btn'>
                    continue shopping
                </Link>
                <button type='button' className='link-btn clear-btn' onClick={clearCart}>
                    clear shopping cart
                </button>
            </div>
            <CartTotals />
        </Wrapper>
    );
};
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
  
  .items{
    .subtotal {
      display: none;
    }
    .price {
      display: none;
    }
    display: grid;
    grid-template-columns: 200px auto auto;
    grid-template-rows: 75px;
    gap: 3rem 1rem;
    justify-items: center;
    margin-bottom: 3rem;
    align-items: center;
    .title {
      grid-template-rows: 75px;
      display: grid;
      grid-template-columns: 75px 125px;
      align-items: center;
      text-align: left;
      gap: 1rem;
    }
    img {
      width: 100%;
      height: 100%;
      display: block;
      border-radius: var(--radius);
      object-fit: cover;
    }
    h5 {
      font-size: 0.75rem;
      margin-bottom: 0;
    }

    .color {
      color: var(--clr-grey-5);
      font-size: 0.75rem;
      letter-spacing: var(--spacing);
      text-transform: capitalize;
      margin-bottom: 0;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      span {
        display: inline-block;
        width: 0.5rem;
        height: 0.5rem;
        background: red;
        margin-left: 0.5rem;
        border-radius: var(--radius);
      }
    }
    .price-small {
      color: var(--clr-primary-5);
    }
    .amount-btns {
      width: 75px;
      button {
        width: 1rem;
        height: 0.5rem;
        font-size: 0.75rem;
      }
      h2 {
        font-size: 1rem;
      }
    }
    .remove-btn {
      color: var(--clr-white);
      background: transparent;
      border: transparent;
      letter-spacing: var(--spacing);
      background: var(--clr-red-dark);
      width: 1.5rem;
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--radius);
      font-size: 0.75rem;
      cursor: pointer;
    }
    @media (min-width: 776px) {
      .subtotal {
        display: block;
        margin-bottom: 0;
        color: var(--clr-grey-5);
        font-weight: 400;
        font-size: 1rem;
      }
      .price-small {
        display: none;
      }
      .price {
        display: block;
        font-size: 1rem;
        color: var(--clr-primary-5);
        font-weight: 400;
      }
      .name {
        font-size: 0.85rem;
      }
      .color {
        font-size: 0.85rem;
        span {
          width: 0.75rem;
          height: 0.75rem;
        }
      }
      grid-template-columns: 1fr 1fr 1fr 1fr auto;
      align-items: center;
      grid-template-rows: 75px;
      img {
        height: 100%;
      }
      .title {
        height: 100%;
        display: grid;
        grid-template-columns: 100px 200px;
        align-items: center;
        gap: 1rem;
        text-align: left;
      }
      .amount-btns {
        width: 100px;
        button {
          width: 1.5rem;
          height: 1rem;
          font-size: 1rem;
        }
        h2 {
          font-size: 1.5rem;
        }
      }
    }
  }
  
  
  .columns{
    display: none;
    @media (min-width: 776px) {
      display: block;
      .content {
        display: grid;
        grid-template-columns: 316px 1fr 1fr 1fr auto;
        justify-items: center;
        column-gap: 1rem;
        h5 {
          color: var(--clr-grey-5);
          font-weight: 400;
        }
      }

      span {
        width: 2rem;
        height: 2rem;
      }
      hr {
        margin-top: 1rem;
        margin-bottom: 3rem;
      }
    }
  }
  .totals{
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    article {
      border: 1px solid var(--clr-grey-8);
      border-radius: var(--radius);
      padding: 1.5rem 3rem;
    }
    h4,
    h5,
    p {
      display: grid;
      grid-template-columns: 200px 1fr;
    }
    p {
      text-transform: capitalize;
    }
    h4 {
      margin-top: 2rem;
    }
    @media (min-width: 776px) {
      justify-content: flex-end;
    }
    .btn {
      width: 100%;
      margin-top: 1rem;
      text-align: center;
      font-weight: 700;
    }
  }
  
  
  
`;
export default CartContent;
