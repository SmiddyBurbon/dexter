import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase'
import VueFirebase from 'vue-firebase'

// Config firebase project
const FBCONFIG = {
    apiKey: "AIzaSyDsacsggn4PhHeufqVLc7Nvu5wySBK118U",
    authDomain: "dexter-9cb27.firebaseapp.com",
    databaseURL: "https://dexter-9cb27-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "dexter-9cb27",
    storageBucket: "dexter-9cb27.appspot.com",
    messagingSenderId: "104109341536"
};
 
Vue(App).use(VueFirebase, {firebase: firebase, config: FBCONFIG});


Vue(App).mount('#app')
