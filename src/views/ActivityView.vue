<template>
  <div class="hello">
    <Activity v-bind:activities="activities"/> 
  </div>
</template>

<script>

import axios from 'axios'
import Activity from '../components/Activity'

export default {
  name: 'ActivityView',
  components:{
    Activity
  },
  data(){
    return{
      activities: []
    }
  },
  created(){
    const proxy = "https://cors-anywhere.herokuapp.com/";
    //baseUrl: open-api.myhelsinki.fi/v1/
    axios.get(`${proxy}http://open-api.myhelsinki.fi/v1/activities/`)
      //filling the array with fetched data
      .then(res => this.activities = res.data.data )
      .catch(err => console.log(err))

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
