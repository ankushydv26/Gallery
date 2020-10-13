import  * as firebase from "firebase/app"
import 'firebase/storage'
import  'firebase/firestore'
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBFYk2CKul86ZJSaPOZlBSMPq-JuQ3ozOQ",
    authDomain: "vishalsharmaphotogallery.firebaseapp.com",
    databaseURL: "https://vishalsharmaphotogallery.firebaseio.com",
    projectId: "vishalsharmaphotogallery",
    storageBucket: "vishalsharmaphotogallery.appspot.com",
    messagingSenderId: "34286776016",
    appId: "1:34286776016:web:cd7d58b68d6b9bf28178d5"
  };
   firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectFirestore, projectStorage ,timestamp  };

  export default firebase;

