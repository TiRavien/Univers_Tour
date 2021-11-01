import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/HomePage/Home/Home';
import Footer from './Components/HomePage/Footer/Footer';
import Offerings from './Components/Offerings/Offerings';
import Login from './Components/Login/Login/Login';
import Navber from './Components/HomePage/Navber/Navber';
import NotFound from './Components/NotFound/NotFound';
import MyOrders from './Components/MyOrders/MyOrders';
import ManageAllOrders from './Components/ManageAllOrders/ManageAllOrders';
import AddaNewService from './Components/AddANewService/AddaNewService';
import AuthProvider from './Context/AuthProvider';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navber/>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/home'>
              <Home/>
            </Route>
            <Route path='/offerings'>
              <Offerings/>
            </Route>
            <PrivateRoute path='/offering/:serviceId'>
              <PlaceOrder/>
            </PrivateRoute>
            <Route path='/myOrder'>
              <MyOrders/>
            </Route>
            <Route path='/manageAll'>
              <ManageAllOrders/>
            </Route>
            <Route path='/addaNewService'>
              <AddaNewService/>
            </Route>
            <Route path='/login'>
              <Login/>
            </Route>
            <Route path='*'>
              <NotFound/>
            </Route>
          </Switch>
          <Footer/>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
