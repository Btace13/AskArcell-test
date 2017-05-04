<template>
  <div class="hello container">
        
        <main>
    
              <div class="adminSection" v-if="user.email === adminEmail">
             <div class="row">
                <div class="col-md-6">   
                    <h2>Enter User That Asked</h2>
                    <input v-model="userName" class="form-control" placeholder="User" type="text">
                </div>
                <div class="col-md-6">
                       <h2>Enter Question Being Answered</h2>
                <input v-model="question" class="form-control" placeholder="Question" type="text">
                </div>
             </div>
                <h2>Answer The Question</h2>
                <textarea v-model="answer" class="form-control" cols="30" rows="5" placeholder="Answer"></textarea>
                <button class="btn btn-info btn-block" v-on:Click="submit()">Submit</button>
              </div>
              <h1>ANSWERED QUESTIONS</h1>
              <br/>
              <hr/>
               <div class="wrapper">
  
                        <div class="table">
                            
                            <div class="rowT header">
                            <div class="cell">
                                User
                            </div>
                            <div class="cell">
                                Question
                            </div>
                            <div class="cell">
                                Answer
                            </div>
                            <div class="cell">
                                Date
                            </div>
                            </div>

                            <div v-for="item in answers | orderBy 'time' -1 " class="rowT">
                            <div class="cell">
                                {{item.userName}}
                            </div>
                            <div class="cell">
                                {{item.question}}
                            </div>
                            <div class="cell">
                                {{item.answer}}
                            </div>
                            <div class="cell">
                                {{item.time}}
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
      answers: [],
      user: firebase.auth().currentUser,
      adminEmail: 'btace1347@yahoo.com',
      answering: false
    }
  },
  methods: {
      submit() {
      console.log(this.questions)
      var d = Date()
      firebase.database().ref('answers').push({
        question: this.question,
        answer: this.answer,
        userName: this.userName,
        time: d
      })
      toastr.success('Question Answered')
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
    firebase.database().ref('answers').on('value', function(snapshot) {
      _this.answers = snapshot.val()
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
 h1, h2 {
  color: #fff;
    font-family: 'Permanent Marker', cursive;

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
  color: #42b983;
}
p{
  font-size: 15pt;
}
.adminSection{
    background: rgba(255, 255, 255, .8);
    padding: 5%;
}
.adminSection h2 {
    color: #000;
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

.rowT {
  display: table-row;
  background: rgba(0, 0, 0,.1);
}
.rowT:hover {
  background: #A62639;
}
.rowT:nth-of-type(odd) {
  background: rgba(0, 0, 0,.1);
}
.rowT:nth-of-type(odd):hover {
  background: #F39237;
}
.rowT.header {
  font-weight: 900;
  color: #ffffff;
  background: rgba(0, 0, 0,.1);
}
@media screen and (max-width: 580px) {
  .rowT {
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
    border-left: 1px solid rgba(243, 146, 55,.2);
  }
  .rowT.header {
  font-weight: 900;
  color: #ffffff;
  background: rgba(37, 206, 209, .6);
}
}


</style>
