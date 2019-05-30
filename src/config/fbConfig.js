import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
 var config = {
    apiKey: "AIzaSyB5B2uzG7pGxDYotxTnaN11iNkxJltcXMA",
    authDomain: "khgriffi-pacersblog.firebaseapp.com",
    databaseURL: "https://khgriffi-pacersblog.firebaseio.com",
    projectId: "khgriffi-pacersblog",
    storageBucket: "khgriffi-pacersblog.appspot.com",
    messagingSenderId: "816872233501"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase