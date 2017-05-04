
<template>
  <div class="overview">
    <h1>Welcome To Ask Arcell</h1>
    <div v-if="authenticated">
        <button class="btn btn-info btn-block"><a href="/index.html#!/ask">Ask A Question!</a></button>       
    </div>
    <div v-else>
    <p>
      Make An Account To Start Asking!
    </p>
    <button class="btn btn-primary"> <a href="/auth.html#!/"> Sign Up</a></button>
    </div>
    <div class="about">
      <div class="media">
        <div class="media-left">
            <img class="media-object" src="../assets/theCrew2.png" alt="...">
        </div>
        <div class="media-body">
          <h2 class="media-heading">Arcell</h2>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate modi veniam enim cum 
              magnam quas accusamus ipsum deserunt velit nisi optio laborum tempora, quia ex culpa 
              dicta pariatur deleniti repudiandae?
          </p>
        </div>
      </div>
    </div>
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
  margin-bottom: 80px;
  font-size: 4em;

}
a {
  text-decoration: none;
  color: #fff;
}
div .overview {
color: #fff;
padding-top: 10%;
height: 70vh;
}
.about {
color: #fff;
padding-top: 10%;
padding-bottom: 300px;

}
.media-object{
    max-width: 500px;
    max-height: 500px;
}


</style>

