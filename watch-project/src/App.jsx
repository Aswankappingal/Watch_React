import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Index from './Components/Body/Index'
import Adminlogin from './Components/Admin/Adminlogin/Adminlogin'
import Adminregister from './Components/Admin/Adminregister/Adminregister'
import Adminfrgpwd from './Components/Admin/AdminFgtPwd/Adminfrgpwd'
import AdminHome from './Components/Admin/AdminHome/AdminHome'

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

      </Routes>
      
      </BrowserRouter>

    </>
  )
}

export default App
