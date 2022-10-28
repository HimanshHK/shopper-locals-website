import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
// import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { links } from '../utils/constants';
// import CartButtons from './CartButtons';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
// import { useProductsContext } from '../context/products_context';
// import { useUserContext } from '../context/user_context';



const Nav = () => {
  // const { openSidebar } = useProductsContext();
  // const { myUser } = useUserContext();
  
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
  ]



  return (
    <NavContainer>
      <div className='nav-center'>

        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt='shopper' />
          </Link>

          {/* <button type='button' className='nav-toggle'>
            <FaBars />
          </button> */}
          
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
    
        </ul>
        {/* <CartButtons /> */}
        <div className='loginstyle'>
        <AddShoppingCartIcon/>
        <h4 className='loginstyle'>Cart</h4>
        <LoginIcon/>
        <h4 className='loginstyle'>Login</h4>
        </div>
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
  .loginstyle{
    width:12vw;
    display: flex;
    justify-content: space-between;
    align items:center;  
    margin:auto;
    padding:auto;
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
    h4{
      font-family: "Times New Roman", Times, serif;
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Nav;
