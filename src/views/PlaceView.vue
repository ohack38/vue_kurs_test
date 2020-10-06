<template>
  <div class="hello" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10" >
    <div style="height:100%; vertical-align:center" v-if="loading">
      <Loading />
    </div>
    <Place v-bind:places="places"/> 
  </div>
</template>

<script>

import infiniteScroll from 'vue-infinite-scroll'
import axios from 'axios'
import Place from '../components/Place'
import Loading from '../components/Loading'

export default {
  name: 'PlaceView',
  components:{
    Place,
    Loading
  },
  data(){
    return{
      places: [],
      loading: true,
      limit: 10
    }
  },
    directives:{
    infiniteScroll
  },
  methods: {
    loadMore() {
      console.log();
      this.busy = true;
      
      const proxy = "https://cors-anywhere.herokuapp.com/";
      //baseUrl: open-api.myhelsinki.fi/v1/
      axios.get(`${proxy}http://open-api.myhelsinki.fi/v1/places/`)
        .then(res => {
          const append = res.data.data.slice(
            this.places.length,
            this.places.length + this.limit,
            this.loading = false
          );
          this.places = this.places.concat(append);
          this.busy = false;
          });
    }
  },
  created(){
    this.loadMore()
  }
}
</script>

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
.progress-ring_circle {
  stroke-dasharray: 280;
  stroke-linecap: round;
}

</style>