<template>
  <div class="hello" infinite-scroll-disabled="busy" infinite-scroll-distance="10" >
    <div>
      <button id="games" @click="select" type="button">Games</button>
      <button id="theatre" @click="select" type="button">Theatre</button>
    </div>
    
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
      busy: false,
      btnClicked: false
    }
   
  },
  directives:{
    infiniteScroll
  },
  methods: {
    select: function(e){
      let buttonID=e.currentTarget.id;
      console.log(buttonID)
      this.busy = true;
      const proxy = "https://cors-anywhere.herokuapp.com/";
      //baseUrl: open-api.myhelsinki.fi/v1/
      axios.get(`${proxy}http://open-api.myhelsinki.fi/v1/events/?tags_search=`+buttonID)
        .then(res => {
          const append = res.data.data.slice(
            this.events.length,
            this.events.length + this.limit
          );
          this.events = this.events.concat(append);
          this.busy = false;
          });
    }
  },

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
button{
   width: 150px;
    height: 120px;
    padding: 50px 250px;
    margin: 5px;
    background-color: #424242;
    color: white;
    border: 5px;
    cursor: pointer;
    font-size: 45px;
}
button:hover{
   background-color: #353434;
}
</style>
