import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import { Home, SingleProduct, Cart, Checkout, Error, About, Products, PrivateRoute, AuthWrapper } from './pages';
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <div>
      <Router>
        
        <Navbar />
          <Sidebar />
        
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
          <Route exact path='/products'>
            <Products />
          </Route>
          <Route exact path='/addproduct'>
            <AddProduct/>
          </Route>
          <Route exact path='/login'>
            <SignIn/>
          </Route>
          <Route exact path='/signin'>
            <SignUp/>
          </Route>

          <Route exact path='/products/:id' children={<SingleProduct />} />

          {/* <PrivateRoute exact path='/checkout'>
            <Checkout />
          </PrivateRoute> */}
          
          <Route path='*'>
            <Error />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
