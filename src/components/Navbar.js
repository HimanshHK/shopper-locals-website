import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import { links } from '../utils/constants';
import CartButtons from './CartButtons';
import { useProductsContext } from '../context/products_context';
import { useUserContext } from '../context/user_context';
import Sidebar from './Sidebar';


const Nav = () => {
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();


  const links_hk = [
    {
        id: 1,
        text: 'home',
        url: '/',
    },
    {
        id: 2,
        text: 'products',
        url: '/products',
        
    },
    {
        id: 3,
        text: 'about',
        url: '/about',
        
    },
      {
          id:4,
          text:'add product',
          url:'/addproduct',
      }
]

  return (
      <NavContainer>
      <Sidebar/>
        <div className='nav-center'>
          <div className='nav-header'>
            <Link to='/'>
              <img src={logo} alt='shopper' />
            </Link>
            <button type='button' className='nav-toggle' onClick={openSidebar}>
              <FaBars />
            </button>

          </div>
          <ul className='nav-links'>
            {links_hk.map((link) => {
              const { id, text, url } = link;
              return (
                  <li key={id}>
                    <Link to={url}>{text}</Link>
                  </li>
              );
            })}

            {myUser && (
                <li>
                  <Link to='/checkout'>checkout</Link>
                </li>
            )}
          </ul>
          <CartButtons />
          {/* <div className="cartbutton">
            <Link to='/cart'><h4 className="cartbutton"><ShoppingCartRoundedIcon/>Cart</h4></Link>
            <Link to='/login'><h4 className="cartbutton"><LoginRoundedIcon/>Login</h4></Link>
          </div> */}
        </div>
      </NavContainer>
  );
};




const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .cartbutton{
    display:flex;
    width:6vw;
    color:black;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 1px solid var(--clr-primary-7);
          border-top: 1px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Nav;
