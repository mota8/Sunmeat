
import './assets/css/style.bundle.rtl.css?v=7.0.6'
import './assets/css/plugins.bundle.rtl.css?v=7.0.6'
import './assets/css/bace.css'
import HomeWeb from './web/HomeWeb';
import './assets/css/bace.css'
import ProductDetails from './web/Pages/ProductDetails'
import Content from './components/Content';
import Navbar from './components/Navbar';
import Aaaa from './Aaaa';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ContactUs from './web/ContactUs';

function App() {
  return (
    <div>
      <Router>

        <Switch>

          {/* <Route path="/AboutUs" > <AboutUs /> </Route>
          <Route path="/ContactUs" > <ContactUs /> </Route>
          <Route path="/Terms" > <Terms /> </Route>
          <Route path="/Login" > <Login /> </Route>
          <Route path="/singup" > <Singup /> </Route> */}
          <Route path="/ProductDetails/:ProductId" > <ProductDetails /> </Route>
          <Route path="/ContactUs" > <ContactUs /> </Route>
          <Route path="/Aaaa" > <Aaaa /> </Route>
          <Route path="/" > <HomeWeb /> </Route>

        </Switch>

      </Router>

    </div >
  );
}

export default App;
