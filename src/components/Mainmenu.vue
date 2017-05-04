
<template>
<div class="main-menu"> 
  <nav class="navbar navbar-inverse">
              <div class="container-fluid">

                <div class="navbar-header">
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                  <a class="navbar-brand" href="/home">Ask Arcell</a>
                </div>
                
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul class="nav navbar-nav">
                    <li role="presentation" v-for="item in arrNav" v-link-active v-if="item.auth || authenticated">
                      <a v-link="{ path: item.id, exact: true }">{{ item.title}}</a>
                    </li>
                    <li><a target="_blank" href="https://twitter.com/arcellg">Tweet</a></li>
                  </ul>
                  <ul class="nav navbar-nav navbar-right">
                    <li> <a href="javascript:void( window.open( 'https://form.jotform.us/62585570178162', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) ) ">Contact</a></li>
                     <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{user.email}} <span class="caret"></span></a>
                      <ul class="dropdown-menu">
                        <li class="logBtn" v-if="authenticated" v-on:click="logout()" href="#">Log Out</li>
                        <li class="logBtn" v-else v-on:click="logout()" href="#">Log In</li>
                      </ul>
                    </li>                   
                  </ul>
                </div>
                
              </div>
        </nav>  
         </div>
         <ul class="bg-bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
</template>

<script>
import firebase from 'firebase'
export default {
  props: ['authenticated'],
  data () {
    return {
      msg: 'Hello World!',
      user: firebase.auth().currentUser,
      arrNav: [{
        'title': 'Home',
        'id': '/',
        'auth': true
      },
      {
        'title': 'Ask',
        'id': '/ask',
        'auth': false
      },
      {
        'title': 'Questions',
        'id': '/home',
        'auth': true
      },
      {
        'title': 'Answers',
        'id': '/answers',
        'auth': true
      } ],
      cur: ' '
    }
  },
  methods: {
    login() {
      window.location.href = 'auth.html'
    },
    logout() {
      console.log('out')
      firebase.auth().signOut().then(function() {
        window.location.href = '/auth.html'
      }, function(error) {
        console.log(error)
      })
    }
   },
  ready: function () {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url('https://fonts.googleapis.com/css?family=Bangers|Carter+One|Fjalla+One|Permanent+Marker|Press+Start+2P');
html{
  text-align: center;
  }
  *{
  margin:0px;
  padding:0px;
  box-sizing: border-box;
}

body{
  background: #0E0E52;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	z-index: 1;

}

.bg-bubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.bg-bubbles li {
  position: absolute;
  list-style: none;
  display: block;
  width: 40px;
  height: 40px;
  background-color: #25CED1;
  bottom: 60px;
  -webkit-animation: square 25s infinite;
  animation: square 25s infinite;
  -webkit-transition-timing-function: linear;
  transition-timing-function: linear;
  opacity:0;
}

.bg-bubbles li:nth-child(1) {
  left: 3%;
  border-radius:50em;
  background:transparent;
  border:4px solid #A62639;
}
.bg-bubbles li:nth-child(2) {
  left: 6%;
  width: 75px;
  height: 75px;
  -webkit-animation-delay: 2s;
          animation-delay: 2s;
  -webkit-animation-duration: 17s;
          animation-duration: 17s;
}
.bg-bubbles li:nth-child(3) {
  left: 15%;
  width: 175px;
  height: 175px;
  -webkit-animation-delay: 4s;
          animation-delay: 4s;
}
.bg-bubbles li:nth-child(4) {
  left: 40%;
  width: 90px;
  height: 90px;
  -webkit-animation-duration: 22s;
          animation-duration: 22s;
}
.bg-bubbles li:nth-child(5) {
  left: 70%;
  background:transparent;
  border:4px solid #FFFFFF;
}
.bg-bubbles li:nth-child(6) {
  left: 90%;
  width: 90px;
  height: 90px;
  -webkit-animation-delay: 3s;
          animation-delay: 3s;
  border-radius:50em;
  background:transparent;
  border:4px solid #F39237;
}
.bg-bubbles li:nth-child(7) {
  left: 32%;
  width: 60px;
  height: 60px;
  -webkit-animation-delay: 7s;
          animation-delay: 7s;
  background:transparent;
  border:4px solid #F39237;
}
.bg-bubbles li:nth-child(8) {
  left: 55%;
  width: 50px;
  height: 50px;
  -webkit-animation-delay: 15s;
          animation-delay: 15s;
  -webkit-animation-duration: 40s;
          animation-duration: 40s;
}
.bg-bubbles li:nth-child(9) {
  left: 30%;
  width: 140px;
  height: 140px;
  -webkit-animation-delay: 2s;
          animation-delay: 2s;
  -webkit-animation-duration: 40s;
          animation-duration: 40s;
  border-radius:50em;
  background:transparent;
  border:4px solid #A62639;
}
.bg-bubbles li:nth-child(10) {
  left: 90%;
  width: 60px;
  height: 60px;
  -webkit-animation-delay: 11s;
          animation-delay: 11s;
}
.bg-bubbles li:nth-child(11) {
  left: 10%;
  width: 40px;
  height: 40px;
  -webkit-animation-delay: 13s;
          animation-delay: 13s;
  border-radius:50em;
}
.bg-bubbles li:nth-child(12) {
  left: 55%;
  width: 175px;
  height: 175px;
  -webkit-animation-delay: 7s;
          animation-delay: 7s;
  background:transparent;
  border:4px solid #A62639;
}

.bg-bubbles li:nth-child(13) {
  left: 65%;
  width: 100px;
  height: 100px;
  -webkit-animation-delay: 8s;
          animation-delay: 8s;
  border-radius:50em;
}

@-webkit-keyframes square {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity:0;
  }
  50% {
    opacity:1;
  }
  100% {
    -webkit-transform: translateY(-700px) rotate(600deg);
            transform: translateY(-700px) rotate(600deg);
    opacity:1;
  }
}
@keyframes square {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity:0;
  }
  50% {
    opacity:1;
  }
  100% {
    -webkit-transform: translateY(-700px) rotate(600deg);
            transform: translateY(-700px) rotate(600deg);
    opacity:0;
  }
}

.navbar-inverse .navbar-nav>li>a, .navbar-brand, .dropdown .dropdown-menu {
    color: #9d9d9d;
    font-family: sans-serif;
}
.navbar-inverse, .navbar-brand{
    font-family: 'Permanent Marker', cursive;

}
.logBtn{
  display: block;
  cursor: pointer;
  text-align: center;
}

</style>
