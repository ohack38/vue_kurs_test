<template>
  <div class="hello">
<div style="height:100%; vertical-align:center" v-if="loading">
<svg
   class="progress-ring"
   width="120"
   height="120"
   >
<circle
  class="progress-ring__circle"
  stroke="white"
  stroke-width="5"
  fill="transparent"
  r="52"
  cx="60"
  cy="60"/>

    <animateTransform 
       attributeName="transform" 
       attributeType="XML" 
       type="rotate"
       dur="4s" 
       from="0 0 0"
       to="360 0 0" 
       repeatCount="indefinite" />
  </svg>
</div>
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
      places: [],
      loading: true
    }
  },
  created(){
    const proxy = "https://cors-anywhere.herokuapp.com/";
    //baseUrl: open-api.myhelsinki.fi/v1/
    axios.get(`${proxy}http://open-api.myhelsinki.fi/v1/places/`)
      //filling the array with fetched data
      .then((res) => {
        this.places = res.data.data;
        this.loading = false;
        } )
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
.progress-ring__circle {
  stroke-dasharray: 10 20;
}

</style>