import firebase from 'firebase'

export function fireInit(func) {
	// !!!! Replace with your own Firebase settings !!!!!
	var config = {
    apiKey: 'AIzaSyBg9ZsZ-6MwQqyV_-DoDmrzze16u6MbAwU',
    authDomain: 'askarcell-5aef6.firebaseapp.com',
    databaseURL: 'https://askarcell-5aef6.firebaseio.com',
    projectId: 'askarcell-5aef6',
    storageBucket: 'askarcell-5aef6.appspot.com',
    messagingSenderId: '919568005006'
	}
	firebase.initializeApp(config)

	firebase.auth().onAuthStateChanged(function (user) {
	  if (user) {
	    func(true, user)
	  } else {
	    func(false)
	  }
	}, function(error) {
	  console.log(error)
	})
}
