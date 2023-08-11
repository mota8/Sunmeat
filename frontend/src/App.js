
import './assets/css/style.bundle.rtl.css?v=7.0.6'
import './assets/css/plugins.bundle.rtl.css?v=7.0.6'
import './assets/css/bace.css'
import HomeWeb from './web/HomeWeb';
import './assets/css/bace.css'
import ProductDetails from './web/Pages/ProductDetails'
import Content from './components/Content';
import Navbar from './components/Navbar';
import HomeMobile from './/mobile/HomeMobile'
import ShopingPages from './mobile/ShopingPages'
import Sending from './mobile/Sending';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ContactUs from './web/ContactUs';
import Mypages from './mobile/Mypages';
import Bought from './mobile/Bought';

function App() {
  return (
    <div>
      <Router>

        <Switch>
        <Route path="/Bought" > <Bought /> </Route>
        <Route path="/Sending" > <Sending /> </Route>
        <Route path="/ShopingPages" > <ShopingPages /> </Route>
        <Route path="/Mypages" > <Mypages /> </Route>
        <Route path="/HomeMobile" > <HomeMobile /> </Route>
        <Route path="/ProductDetails/:ProductId" > <ProductDetails /> </Route>
          <Route path="/ContactUs" > <ContactUs /> </Route>
          <Route path="/" > <HomeWeb /> </Route>
        </Switch>

      </Router>

    </div >
  );
}

export default App;
