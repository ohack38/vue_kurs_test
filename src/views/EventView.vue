<template>
  <div class="hello" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10" >
    <Event v-bind:events="events"/> 
  </div>
</template>

<script>
import infiniteScroll from 'vue-infinite-scroll'
import axios from 'axios'
import Event from '../components/Event'

export default {
  name: 'EventView',
  components:{
    Event
  },
  data(){
    return{
      events: [],
      limit: 10,
      parts: [],
      busy: false
    }
  },
  directives:{
    infiniteScroll
  },
  methods: {
    loadMore() {
      this.busy = true;
      const proxy = "https://cors-anywhere.herokuapp.com/";
      //baseUrl: open-api.myhelsinki.fi/v1/
      axios.get(`${proxy}http://open-api.myhelsinki.fi/v1/events/`)
        .then(res => {
          const append = res.data.data.slice(
            this.events.length,
            this.events.length + this.limit
          );
          this.events = this.events.concat(append);
          this.busy = false;
          });
    },
    addPart(id){
      //alert(id + 'added to localStorage')
      this.parts.push({id: this.parts.length, part: id});
      localStorage.setItem('storage', JSON.stringify(this.parts))

    }
  },
  created(){
    this.loadMore();
    /*const proxy = "https://cors-anywhere.herokuapp.com/";
    //baseUrl: open-api.myhelsinki.fi/v1/
    axios.get(`${proxy}http://open-api.myhelsinki.fi/v1/events/`)
      //filling the array with fetched data
      .then(res => this.events = res.data.data )
      .catch(err => console.log(err))*/
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
  color: #b94295;
}
</style>
