import React from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


import { Home, SingleProduct, Cart, Checkout, Error, About, Products, PrivateRoute, AuthWrapper,Dashboard,Profile,Orders,Support } from './pages';
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <div>
       <Router>
        
        <Navbar />
          <Sidebar />
          {/* <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/about' element={< About />}></Route>
            <Route exact path='/cart' element={< Cart />}></Route>
            <Route exact path='/products' element={< Products />}></Route>
            <Route exact path='/addproduct' element={< AddProduct />}></Route>
            <Route exact path='/login' element={< SignIn />}></Route>
            <Route exact path='/signin' element={< SignUp />}></Route>  
            <Route exact path='/products/:id' element={< SingleProduct />}></Route>     
            <Route exact path='/checkout' element={< Checkout />}></Route>
            <Route exact path='*' element={< Error />}></Route>



        </Routes> */} 

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
          <Route exact path='/profile'>
            <Profile/>
          </Route>
          <Route exact path='/orders'>
            <Orders/>
          </Route>
          <Route exact path='/support'>
            <Support/>
          </Route>

          <Route exact path='/products/:id' children={<SingleProduct />} />
          <Route exact path='/dashboard'><Dashboard/></Route>
          
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
