import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import {Routes,Route} from "react-router-dom"
import Computers from './pages/Computers/Computers'
import Laptop from './pages/Laptop/Laptop'
import Phones from './pages/Phones/Phones';
import Accessories from './pages/Accessories/Accessories';
import Comparision from './pages/Comparision/Comparision';
import Top10 from './pages/Top10/Top10';
import Footer from './components/Footer/Footer'
import AdminMobiles from './pages/AdminPanel/Mobiles/AdminMobiles'
import AdminDashboard from './pages/AdminPanel/AdminDashboard'
import AdminLogin from './pages/AdminPanel/AdminLogin'
function App() {
  return (
    <>
    
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/computers" element={<Computers/>}></Route>
        <Route path="/laptop" element={<Laptop/>}></Route>
        <Route path="/phones" element={<Phones/>}></Route>
        <Route path="/accessories" element={<Accessories/>}></Route>
        <Route path="/comparision" element={<Comparision/>}></Route>
        <Route path="/top10" element={<Top10/>}></Route>

        {/* Admin */}
        <Route path="/adminlogin" element={<AdminLogin />}></Route>
        <Route path="/admin/" element={<AdminDashboard />}></Route>
        <Route path='/admin/mobiles' element={<AdminMobiles />}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
