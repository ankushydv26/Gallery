import React from 'react';
import Navbar from "../src/Component/Navbar"
import Photo from "./Component/Photo"

import Main from './Component/Main.js'
import {BrowserRouter as Router,Switch} from "react-router-dom"

function App() {

  return (
    <Router>
    <div className="App">
      {/* <Title/> */}
      <Navbar />
        {/* <UploadForm /> */}
        <Switch>
        <Main path="/login"/>
        <Photo path="/" />
        </Switch>
    </div>
    </Router>
  );
}

export default App;