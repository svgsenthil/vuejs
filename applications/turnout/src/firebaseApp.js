import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDmKdtozvlQzCZc2XJ0GaUxl4HN8EzIFcw",
  authDomain: "turnout-dbc07.firebaseapp.com",
  databaseURL: "https://turnout-dbc07.firebaseio.com",
  projectId: "turnout-dbc07",
  storageBucket: "turnout-dbc07.appspot.com",
  messagingSenderId: "96591833580",
  appId: "1:96591833580:web:4213320597d1d66f"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig)
