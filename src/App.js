import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home/Home'
import Header from './component/Header/Header'
import './Grid.css'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
import Cart from './Pages/Cart/Cart'
import ScrollToTop from './ScrollToTop';
import ProductDetail from './Pages/ProductDetails/ProductDetail'
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Header/>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Cart" component={Cart}/>
          <Route exact path="/ProductDetails/:id" component={ProductDetail}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
