import React from "react";
import Navbar from "../navbar/Navbar";
import PoemCont from "../poems/PoemCont";
import Home from "../home/Home";
import InspirationCard from "../inspirations/InspirationCard";
import CategoryCard from "../pcategories/CategoryCard";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Collection from "../poems/Collection";

function App() {
  
  return (
    <Router>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/poems' element={<PoemCont/>}/>
        <Route exact path='/inspirations' element={<InspirationCard/>}/>
        <Route exact path='/categories' element={<CategoryCard/>}/>
        <Route exact path='/collection's element={<Collection/>}/>
      </Routes>
    </Router>
  );
}
    
export default App;