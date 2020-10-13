import React, { useState } from 'react'
import ImageGrid from "./ImageGrid"
import UploadForm from "./Upload"
import Navbar from "../Component/Navbar"
import Modal from "../Component/Modal"
import firebase from "../firebase/config"
import { Button } from '@material-ui/core';


function Home() {
  const [selectedImg, setSelectedImg] = useState(null);

  function logOut () {
    firebase.auth().signOut();
  }
  return (
    <div className="App pa2">
      <Navbar />
      <div className="container pa5 ma2">
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
        <div className="logout pa2" style={{ textAlign: "center" }}>
          <Button variant="outlined" style={{backgroundColor:"white",color:"black"}}
            onClick={logOut}>
            Log out</Button>
        </div>
      </div>
    </div>
  )
}

export default Home
