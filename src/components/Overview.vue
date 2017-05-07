
<template>
  <div class="overview">
    <div class="jumbotron">
    <h1>Welcome To Ask Arcell!</h1>
    <div v-if="authenticated">
        <button v-on:Click="askRoute()" class="btn btn-primary btn-block">Ask A Question!</button>       
    </div>
    <div v-else>
    <p>
      Make An Account To Start Asking!
    </p>
    <button class="btn btn-primary"> <a href="/auth.html#!/"> Sign Up</a></button>
    </div>
    </div>
    <div class="about">
      <h2 class="media-heading">About</h2>
          <p>
              This site is where you can come ask your craziest most curious questions that you've 
              been wanting to get answered. Who is Arcell you ask? Well why don't you ask him yourself.
              He will literally answer whatever you ask; maybe. If you're lucky he will pick your question 
              and answer it on Sunday. Every Sunday he will go through them and pick what he wants. Let's call
              it, Ask Arcell Sunday's.
          </p>
    </div>
</template>

<script>
import firebase from 'firebase'
import toastr from 'toastr'

export default {
  props: ['authenticated'],
  data () {
    return {
      msg: 'Hello World!',
      user: firebase.auth().currentUser
    }
  },
  methods: {
    submit() {
      firebase.database().ref('users/' + user.uid).push({
        userName: this.userName
      })
      this.$route.router.go({path: '/home'})
      toastr.success('UserName Changed!')
    },
    askRoute(){
      this.$route.router.go({path: '/ask'})
    }
  },
  ready: function () {

      }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Bangers|Carter+One|Fjalla+One|Permanent+Marker|Press+Start+2P');

h1, h2 {
  font-family: 'Permanent Marker', cursive;
  margin-bottom: 50px;
  font-size: 5em;
}
.jumbotron h1 {
  color: #000;
  text-shadow: 2px 2px 2px #A62639;
}
.container .jumbotron, .container-fluid .jumbotron {
    background: rgba(255, 255, 255, .7);
}
a {
  text-decoration: none;
  color: #fff;
}
div .overview {
color: #fff;
padding-top: 5%;
height: 70vh;
}
.about {
color: #fff;
padding-top: 10%;
padding-bottom: 300px;
margin: 0 10%;
}
.about p {
  font-size: 14pt;
}
.media-object{
    max-width: 500px;
    max-height: 500px;
}


</style>

