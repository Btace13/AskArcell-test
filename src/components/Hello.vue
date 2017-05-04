<template>
  <div class="hello container">
        
        <main>
              <div class="jumbotron">
                <h1>ASK ARCELL ANYTHING</h1>
                <p>Check Back Every Sunday To See If Your Question Got Answered!</p>
              </div>
              
              <div class="page-header">
                  <h1>Questions Asked</h1>
                  <span v-if="user.email === adminEmail"><button class="btn btn-info btn-block" v-on:Click="answer()">Answer Questions</button>
                  <span><button class="btn btn-danger btn-block" v-on:Click="deleting = true">Delete Questions</button></span></span>
              </div>

              <div class="wrapper">
  
  <div class="table">
    
    <div class="row header">
      <div class="cell">
        User
      </div>
      <div class="cell">
        Question
      </div>
      <div class="cell">
        Date
      </div>
    </div>

    <div v-for="item in questions | orderBy 'time' -1 " class="row">
      <div class="cell">
        {{item.name}}
      </div>
      <div class="cell">
        {{item.body}}
      </div>
      <div class="cell">
        {{item.time}}
        <span v-if="deleting === true"><button v-on:Click="deleteItem($key)" class="btn btn-danger">Delete</button></span>
      </div>
    </div>
  
  </div>
                        
  </main>

  </div>
</template>

<script>
  import firebase from 'firebase'
  import toastr from 'toastr'

export default {
  data () {
    return {  
      questions: [],
      user: firebase.auth().currentUser,
      adminEmail: 'btace1347@yahoo.com',
      answering: false,
      deleting: false
    }
  },
  methods: {
    answer(){
      window.location.href = '/index.html#!/answers'
    },
   logout() {
      console.log('out')
      firebase.auth().signOut().then(function() {
        window.location.href = '/auth.html'
      }, function(error) {
        console.log(error)
      })
    },
    deleteItem(key) {
      console.log('delete: ' + key)
      var adaRef = firebase.database().ref('questions' + '/' + key)
        adaRef.remove()
          .then(function() {
            console.log('Remove Succeeded.')
          })
          .catch(function(error) {
            console.log('Remove failed: ' + error.message)
          })
          toastr.warning('Question Removed')
    },
    removeQuestion: function(questions) {
       var adaRef = firebase.database().ref('questions' + '/' + key)
        adaRef.remove()
        toastr.warning('Book Removed')
      }
   },
  ready: function () {
    var _this = this
    firebase.database().ref('questions').on('value', function(snapshot) {
      _this.questions = snapshot.val()
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Bangers|Carter+One|Fjalla+One|Permanent+Marker|Press+Start+2P');

h1, h2 {
  font-weight: normal;
    font-family: 'Permanent Marker', cursive;

}
.page-header h1 {
  color: #fff;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #fff;
}
p{
  font-size: 15pt;
}
.container .jumbotron, .container-fluid .jumbotron {
    background: rgba(255, 255, 255, .8);
}
.wrapper {
  margin: 0 auto;
  text-align: left;
}

.table {
  margin: 0 0 40px 0;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  display: table;
}
@media screen and (max-width: 580px) {
  .table {
    display: block;
  }
}

.row {
  display: table-row;
  background: rgba(0, 0, 0,.1);
}
.row:hover {
  background: #A62639;
}
.row:nth-of-type(odd) {
  background: rgba(0, 0, 0,.1);
}
.row:nth-of-type(odd):hover {
  background: #F39237;
}
.row.header {
  font-weight: 900;
  color: #ffffff;
  background: rgba(0, 0, 0,.1);
}
@media screen and (max-width: 580px) {
  .row {
    padding: 8px 0;
    display: block;
  }
}

.cell {
  padding: 2% 2%;
  display: table-cell;
  color: #fff;
  border-bottom: 2px solid rgba(243, 146, 55,.2);
}
@media screen and (max-width: 580px) {
  .cell {
    padding: 2px 12px;
    display: block;
    border-bottom: none;
  }
  .row.header {
  font-weight: 900;
  color: #ffffff;
  background: rgba(37, 206, 209, .6);
}
}


</style>
