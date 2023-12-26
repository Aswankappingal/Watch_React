import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Index from './Components/Body/Index'
import Adminlogin from './Components/Admin/Adminlogin/Adminlogin'
import Adminregister from './Components/Admin/Adminregister/Adminregister'
import Adminfrgpwd from './Components/Admin/AdminFgtPwd/Adminfrgpwd'
import AdminHome from './Components/Admin/AdminHome/Adminhome'
import Category from './Components/Admin/Category/Category'
import Products from './Components/Admin/Products/Products'
import EditCategory from './Components/Admin/Editcategory/EditCategory'
import CustomerReg from './Components/Customer/CustomerReg/CustomerReg'
import Customerlogin from './Components/Customer/CustomerLogin/Customerlogin'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        
      <Route path='/' Component={Index}/>
      <Route path='/Adminlogin' Component={Adminlogin}/>
      <Route path='/Adminhome' Component={AdminHome}/>
      <Route path='/Adminregister' Component={Adminregister}/>
      <Route path='/Adminfrgpwd' Component={Adminfrgpwd}/>
      <Route path='/Category' Component={Category}/>
      <Route path='/products' Component={Products}/>
      <Route path='/editcategory/:id' Component={EditCategory}/>
      <Route path='/CustomerReg' Component={CustomerReg}/>
      <Route path='/CustomerLogin' Component={Customerlogin}/>


      </Routes>
      
      </BrowserRouter>

    </>
  )
}

export default App
