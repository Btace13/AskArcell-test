
<template>
  <div class="ask">
  
              <div class="page-header">
                  <h1>Type Your Question Below</h1>
              </div>

              <form  v-on:submit.prevent="submit()" class="">
                <textarea style="height: 200px" v-model="body" class="form-control"  placeholder="Question:"></textarea>
                <button type="submit" class="btn btn-block btn-info">Ask</button>
              </form>
  </div>
</template>

<script>
import firebase from 'firebase'
import toastr from 'toastr'

export default {
  props: ['logstatus'],
  data () {
    return {
      user: firebase.auth().currentUser
    }
  },
  methods: {
    submit() {
      console.log(this.questions)
      var d = Date()
      firebase.database().ref('questions').push({
        name: this.user.email,
        body: this.body,
        time: d
      })
      this.$route.router.go({path: '/home'})
      toastr.success('Question Asked')
    }
   },
  ready: function () {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1{
  margin-bottom: 15px;
  color: #fff;
    font-family: 'Permanent Marker', cursive;

}


.ask {
  padding-top: 10%;
}

</style>

