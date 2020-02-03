import Vue from 'vue'
import {router} from "@/routes"
import firebase from "firebase"

import App from './App.vue'

Vue.config.productionTip = false

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyAJ_jS8kwXN1uVPJYrWH6RPmzaKg8EoJTQ",
  authDomain: "weight-tracker-2bb28.firebaseapp.com",
  databaseURL: "https://weight-tracker-2bb28.firebaseio.com",
  projectId: "weight-tracker-2bb28",
  storageBucket: "weight-tracker-2bb28.appspot.com",
  messagingSenderId: "848477919084",
  appId: "1:848477919084:web:64e74faf49950c254dc549",
  measurementId: "G-95HFT8GMYJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue ({
  el: "#app",
  router,
  render: h => h(App)
}).$mount('#app');




