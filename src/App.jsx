import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import HomeScreen from './screens/Home/HomeScreen';
import ItemDetailScreen from './screens/ItemDetailScreen/ItemDetailScreen';
import CartContainer from './screens/CartContainer/CartContainer';
import LoginContainer from './screens/LoginContainer/LoginContainer';
import { useContext, useEffect, useState } from 'react';
import UserContext from './context/UserContext';
import ShippingContainer from './screens/ShippingContainer/ShippingContainer';
import PlaceOrderScreen from './screens/PlaceOrderScreen/PlaceOrderScreen';

function App() {

  const { user } = useContext(UserContext)

  const [actualLocation, setActualLocation] = useState('')

  useEffect(() => {
    setActualLocation(window.location.pathname)
  }, [])

  if (user.active !== null) {

  return (
    <Router>

      {/* Los componentes globales */}
      {
        actualLocation !== '/login' && <Navbar/>
      }

      <Switch>

        <Route path='/' exact component={(props) => <HomeScreen {...props} setActualLocation={setActualLocation}/>}/>

        <Route path='/product/:id'> 
          <ItemDetailScreen/>
        </Route>

        <Route path='/login' component={(props) => <LoginContainer {...props} setActualLocation={setActualLocation} />}/>

        <Route path='/cart' component={CartContainer}></Route>

        <Route path='/shipping' component={(props) => <ShippingContainer {...props} setActualLocation={setActualLocation} />}/>

        <Route path='/placeorder/:id' component={PlaceOrderScreen}></Route>

      </Switch>

    </Router>
  );

  } else {
    return (
      <div className="fa-3x text-center mt-5">
          <i className="fas fa-spinner fa-pulse text-primary"></i>
      </div>
    )
  }
}

export default App;
