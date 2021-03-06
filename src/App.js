import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Authentication from './pages/Login/Authentication';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ForgetPass from './pages/Login/ForgetPass';
import PrivateRouter from './Shared/PrivateRoute';
import ToolDetails from './pages/Home/ToolDetails';
import Dashboard from './pages/Dashboard/Dashboard';
import MyProfile from './pages/Dashboard/MyProfile';
import MyOrders from './pages/Dashboard/MyOrders';
import AddReview from './pages/Dashboard/AddReview';
import NotFound from './Shared/NotFound';
import MyPortfolio from './pages/MyPortfolio/MyPortfolio';
import Blogs from './pages/Blogs/Blogs';
import Payment from './pages/Dashboard/Payment';
import MakeAdmin from './pages/Dashboard/MakeAdmin';
import AdminPrivate from './Shared/AdminPrivate';
import ManageAllProducts from './pages/Dashboard/ManageAllProducts';
import ManageAllOrders from './pages/Dashboard/ManageAllOrders';
import AddProduct from './pages/Dashboard/AddProduct';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/tool/:id' element={<PrivateRouter><ToolDetails /></PrivateRouter>}></Route>
        <Route path='/dashboard' element={<PrivateRouter><Dashboard /></PrivateRouter>}>
          <Route index element={<MyProfile />}></Route>
          <Route path='myOrder' element={<MyOrders />}></Route>
          <Route path='addReview' element={<AddReview />}></Route>
          <Route path='payment/:id' element={<Payment />}></Route>
          <Route path='users' element={<AdminPrivate><MakeAdmin /></AdminPrivate>}></Route>
          <Route path='allProduct' element={<AdminPrivate><ManageAllProducts /></AdminPrivate>}></Route>
          <Route path='allOrders' element={<AdminPrivate><ManageAllOrders /></AdminPrivate>}></Route>
          <Route path='addProduct' element={<AdminPrivate><AddProduct /></AdminPrivate>}></Route>
        </Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/login' element={<Authentication></Authentication>}></Route>
        <Route path='/login' element={<Authentication></Authentication>}></Route>
        <Route path='/forgetPass' element={<ForgetPass></ForgetPass>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
