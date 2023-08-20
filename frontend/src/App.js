
import './assets/css/style.bundle.rtl.css?v=7.0.6'
import './assets/css/plugins.bundle.rtl.css?v=7.0.6'
import './assets/css/bace.css'
import HomeWeb from './web/HomeWeb';
import './assets/css/bace.css'
import ProductDetails from './web/Pages/ProductDetails'
import Content from './components/Content';
import Navbar from './components/Navbar';
import AbutSunmeat from './/mobile/AbutSunmeat'
import ShopingPages from './mobile/ShopingPages'
import Sending from './mobile/Sending';
import Notifications from './mobile/Notifications';
import SeeAll from './mobile/SeeAll';
import Homemobile from './mobile/Homemobile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ContactUs from './web/ContactUs';
import Mypages from './mobile/Mypages';
import Bought from './mobile/Bought';
import AwaitingReview from './mobile/AwaitingReview';
import Saveing from './mobile/Saveing';
import Discount from './mobile/Discount';
import RecordFeedback from './RecordFeedback';
import Style from '../src/mobile/Style';
function App() {
  return (
    <div>
      <Router>

        <Switch>

          <Route path="/style" > <Style /> </Route>
          <Route path="/Homemobile" > <Homemobile /> </Route>
          <Route path="/RecordFeedback" > <RecordFeedback /> </Route>
          <Route path="/Discount" > <Discount /> </Route>
          <Route path="/SeeAll" > <SeeAll /> </Route>
          <Route path="/Saveing" > <Saveing /> </Route>
          <Route path="/AwaitingReview" > <AwaitingReview /> </Route>
          <Route path="/Notifications" > <Notifications /> </Route>
          <Route path="/Bought" > <Bought /> </Route>
          <Route path="/Sending" > <Sending /> </Route>
          <Route path="/ShopingPages" > <ShopingPages /> </Route>
          <Route path="/Mypages" > <Mypages /> </Route>
          <Route path="/AbutSunmeat" > <AbutSunmeat /> </Route>
          <Route path="/ProductDetails/:ProductId" > <ProductDetails /> </Route>
          <Route path="/ContactUs" > <ContactUs /> </Route>
          <Route path="/" > <HomeWeb /> </Route>
        </Switch>

      </Router>

    </div >
  );
}

export default App;
