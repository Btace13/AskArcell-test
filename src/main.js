import Vue from 'vue'
import VueRouter from 'vue-router'
//import firebase from 'firebase'
import {fireInit} from './helpers/firebaseHelpers'
import Overview from './components/Overview.vue'
import BeerList from './components/BeerList.vue'
import Ask from './components/Ask.vue'
import Mainmenu from './components/Mainmenu.vue'
import Hello from './components/Hello.vue'
import EnterBeer from './components/EnterBeer.vue'
import Answers from './components/Answers.vue'
import VueFire from 'vuefire'

Vue.use(VueFire)

Vue.use(VueRouter)

fireInit(fireStatus)
var authenticated = false
// create App instance

const App = Vue.extend({
  data () {
    return {
      authenticated: authenticated
   }
  },
  template:
    '<div class="container">' +
      '<main-menu :authenticated="authenticated"></main-menu>' +
      '<router-view :authenticated="authenticated"></router-view>' + // <- nested outlet
    '</div>',
    components: {
      'main-menu': Mainmenu
    }
})
// create Router instance
var router = new VueRouter({linkActiveClass: 'active'})

// add your routes and their components
function setRouter() {
	router.map({
		 '/': {
	        component: Overview
	    },
	    '/ask': {
	        component: Ask,
	        auth: true
	    },
	    '/beerlist': {
	        component: BeerList,
	        auth: true
	    },
      '/home': {
	        component: Hello,
	        auth: false
	    },
      '/enter': {
	        component: EnterBeer,
	        auth: true
	    },
      '/answers': {
	        component: Answers,
	        auth: true
	    }
	})
}
// check if route requires authentication
router.beforeEach(function (transition) {
  if (transition.to.auth && !authenticated) {
     transition.redirect('/index.html#!/')
  } else {
    transition.next()
  }
})

function fireStatus(loggedIn, user) {
    if (loggedIn) {
      authenticated = true
    } else {
    	authenticated = false
    }
    // start app after we know login status
    setRouter()
    router.start(App, '#app')
  }
// start authentication
