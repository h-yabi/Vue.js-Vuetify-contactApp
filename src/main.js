import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from "./store"
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAWFBA7Agqvr6I_LNQTHkW5kCjlU7MF6kA",
  authDomain: "my-address-pj-2a1d4.firebaseapp.com",
  databaseURL: "https://my-address-pj-2a1d4.firebaseio.com",
  projectId: "my-address-pj-2a1d4",
  storageBucket: "my-address-pj-2a1d4.appspot.com",
  messagingSenderId: "166186606068",
  appId: "1:166186606068:web:f5da5e5c7f6510c2f16da1",
  measurementId: "G-EB6CL0XK9R"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();




new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
