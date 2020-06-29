import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from "./store"
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb5snCi-Q_lX_5NXD14AW2Tnc9-KS2VV0",
  authDomain: "my-address-pj-8f2de.firebaseapp.com",
  databaseURL: "https://my-address-pj-8f2de.firebaseio.com",
  projectId: "my-address-pj-8f2de",
  storageBucket: "my-address-pj-8f2de.appspot.com",
  messagingSenderId: "467122820371",
  appId: "1:467122820371:web:f8ca50028ddc45f4d676e6",
  measurementId: "G-5W84LPCV0D"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
