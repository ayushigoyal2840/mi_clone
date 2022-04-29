
import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar.js';
import Slider from './components/Slider.js';
import {BrowserRouter as Router } from 'react-router-dom';
import data from './data/data.json';
import Offers from './components/Offers.js';
import Heading from './components/Heading.js';
import StarProduct from "./components/StarProduct.js"
import HotAccessoriesMenu  from "./components/HotAccessoriesMenu.js"
// import HotAccessories from "./components/HotAccessories.js"
// const banner=pkg.banner;

import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"
// import NavOptios from "./components/NavOptios.js"



function App() {
  return (
   <Router>
     <PreNavbar />
     <Navbar />
     <Slider start={data.banner.start} />
     <Offers offer={data.offer} />
     <Heading text="STAR PRODUCTS"/>
     <StarProduct starProduct={data.starProduct} />
     <Heading text="HOT ACCESSORIES"/>
     <HotAccessoriesMenu />
     {/* <Route exact path="/music">
       <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}  />
       </Route> */}

<Heading text="PRODUCT REVIEWS"/>

<ProductReviews productReviews={data.productReviews}/>

<Heading text="VIDEOS" />

<Videos videos={data.videos} />

<Heading  text="IN THE PRESS"/>

<Banner  banner={data.banner}/>

<Footer footer={data.footer} />
     
   </Router>
  );
}

export default App;
