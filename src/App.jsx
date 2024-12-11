import React,{useState} from 'react'

import { BrowserRouter as Router,Routes,Route,Link,Navigate } from 'react-router-dom'
import Home from './components/Home.jsx';
import Product from './components/Product.jsx';  
import Login from './components/Login.jsx';
import { Nav,Container, Row, Col,Navbar} from 'react-bootstrap';
import Button  from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';  


const App = () => {

const [isAuthenticated,setIsAuthenticated]=useState(false)
const handleLogin=()=>{
  setIsAuthenticated(true)
}
const handlleLogout=()=>{
  setIsAuthenticated(false)
}
  return  (
    <>
    <Router>
    <header>

<Navbar className="bg-body-tertiary   ">

<Container >
         <Navbar.Brand >
            <img
              src="cart-icon-2.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Profile logo"
            /><span style={{ color: "blue",fontWeight:'500px',fontSize:'40px' }}>ShopEase</span>
             
           </Navbar.Brand>
  </Container>

   
     <nav className='navbar navbar-expand-lg p-3   ' >
     <Button className="navbar-toggler bg-light btn btn-primary" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
     </Button>
          <div className='container-fluidcjustify-content-end collapse navbar-collapse ' id="navbarNav">
            <ul className='navbar-nav ' style={{fontSize:'20px',fontWeight:'500',gap:'10px'}}>
              <li className='nav-item'>
               <Link className='nav-link' to='/ShoppingCart/'>Home</Link> 
               </li>
               <li className='nav-item'>
               <Link className='nav-link' to='/ShoppingCart/product'>Product</Link> 
               </li>
               <li className='nav-item' style={{alignItems:'center' }}>
                {!isAuthenticated?(
                <Link className='nav-link' to='/ShoppingCart/login'>
                   <Button  variant="primary"   style={{fontSize:'18px',fontWeight:'500',backgroundColor:' rgb(54, 54, 98)'}}>LOGIN       </Button>
                   </Link>
                ):(
                  <Button variant="primary" onClick={handlleLogout}   width='50px' style={{fontSize:'18px',fontWeight:'500',backgroundColor:' rgb(54, 54, 98)'}}  >Logout</Button>
                
                )}
              
               </li>
                
            </ul>

            </div>


     </nav>
     </Navbar>

</header>





     <Routes>

          <Route   path='/ShoppingCart/' element={<Home/>}/>
          <Route  path='/ShoppingCart/login' element={<Login  onLogin={handleLogin}/>}/>
          <Route path='/ShoppingCart/product' 
          element={<ProtectedRoute isAuthenticated={isAuthenticated}>
             <Product  onLogout={handlleLogout}/>
          </ProtectedRoute>}
          />
     </Routes>
    </Router>
    <footer >
      <Container id="footer" className="bg-body-tertiary   " >
        <Row>
          <Col >
          
        
            <p>© {new Date().getFullYear()} Gowri . All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </>
  )
}
function ProtectedRoute({isAuthenticated,children}){
  return isAuthenticated?children:<Navigate to="/ShoppingCart/login"/>
}
export default App