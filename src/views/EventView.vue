<template>
  <div class="eventItem" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10" >
    <div class="selectButtons">
      <button id="art" @click="select" type="button">Art</button>
      <button id="culture" @click="select" type="button">Culture</button>
      <button id="families" @click="select" type="button">Family</button>
      <button id="games" @click="select" type="button">Games</button>
      <button id="music" @click="select" type="button">Music</button>
      <button id="theatre" @click="select" type="button">Theatre</button>
      <button id="sports" @click="select" type="button">Sports</button>
      
    </div>
    <div class="eventColumn">
      <Event v-bind:events="events" v-on:add-event="addEvent"/> 
    </div>

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
      myEvents: [],
      busy: false,
      searchID: "art"
    }

  },
  directives:{
    infiniteScroll,
  },
  methods: {
    // Sök enligt kategori/tag
    select: function(e){
      // Clear div före nytt sök
      // works like a charm :)
      let div = document.querySelectorAll(".eventtype");
      if(div.length > 0){
        div.forEach(e => e.remove())
      }
      let buttonID=e.currentTarget.id;
      this.busy = true;
      const proxy = "https://cors-anywhere.herokuapp.com/";
      //baseUrl: open-api.myhelsinki.fi/v1/
      axios.get(`${proxy}http://open-api.myhelsinki.fi/v1/events/?tags_search=`+buttonID)
        .then(res => {
          const append = res.data.data.slice(
            this.events.length,
            this.events.length + this.limit,
            this.searchID = buttonID
          );
          this.events = this.events.concat(append);
          this.busy = false;
          this.searchID = buttonID
          });
    },
    addEvent(id, name, description, url){ 
      alert(id + 'added to localStorage')
      this.myEvents.push({ id: id, name: name, decription: description, url: url});
      localStorage.setItem('storage', JSON.stringify(this.myEvents))
    },
    loadMore() {
      // Infinite scroll, laddar in 'art' kategorin allra först med this.searchID
      // när man klickar på en knapp uppdateras this.searchID till knappens ID
      // för att fortsätta infinite scroll med rätt kategori 

      this.busy = true;
      const proxy = "https://cors-anywhere.herokuapp.com/";
      //baseUrl: open-api.myhelsinki.fi/v1/
      axios.get(`${proxy}http://open-api.myhelsinki.fi/v1/events/?tags_search=`+this.searchID)
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
  font-weight: bold;
  font-style: italic;
  font-size: 1vw;
  color: white;
  height: 50px;
  width: 100px;
  background-color: salmon;
  border-radius: 15px 100px;
  padding: 10px 17px;
  margin: 7px;
}
button:hover {
  background-image: linear-gradient(to right, salmon, white);
}
.eventItem{
  display: flex;
  flex-direction: row;
}
.selectButtons{
  flex-direction: column;
  height: 50px;
  width: 150px;
  position: fixed;
  top: 40%;
  left: 5%;
}
.eventColumn{
  display: flex;
  flex-direction: column;
}
.activeButton{
  background-color: green;
}
</style>
