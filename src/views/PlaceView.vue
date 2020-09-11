<template>
  <div class="hello">
    <Place v-bind:places="places"/> 
  </div>
</template>

<script>

import axios from 'axios'
import Place from '../components/Place'

export default {
  name: 'PlaceView',
  components:{
    Place
  },
  data(){
    return{
      places: []
    }
  },
  created(){
    const proxy = "https://cors-anywhere.herokuapp.com/";
    //baseUrl: open-api.myhelsinki.fi/v1/
    axios.get(`${proxy}http://open-api.myhelsinki.fi/v1/places/`)
      //filling the array with fetched data
      .then(res => this.places = res.data.data )
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
