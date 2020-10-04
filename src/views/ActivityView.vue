<template>
  <div class="hello" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10" >
    <Activity v-bind:activities="activities" v-on:add-part="addPart"/> 
  </div>
</template>

<script>
import infiniteScroll from 'vue-infinite-scroll'
import axios from 'axios'
import Activity from '../components/Activity'

export default {
  name: 'ActivityView',
  components:{
    Activity
  },
  data(){
    return{
      activities: [],
      limit: 10,
      busy: false,
      myEvents: []
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
      axios.get(`${proxy}http://open-api.myhelsinki.fi/v1/activities/`)
        .then(res => {
          const append = res.data.data.slice(
            this.activities.length,
            this.activities.length + this.limit
          );
          this.activities = this.activities.concat(append);
          this.busy = false;
          });
    },
    addEvent(id, name, when_where, description, url){
      //participate button i activityview emittar this funktionen 
      alert(id + 'added to localStorage')
      this.myEvents.push({ id: id, name: name, when_where: when_where, decription: description, url: url});
      localStorage.setItem('storage', JSON.stringify(this.myEvents))

    }
  },

  created(){
    this.loadMore();
    // const proxy = "https://cors-anywhere.herokuapp.com/";
    // //baseUrl: open-api.myhelsinki.fi/v1/
    // axios.get(`${proxy}http://open-api.myhelsinki.fi/v1/activities/?limit=10`)
    //   //filling the array with fetched data
    //   .then(res => this.activities = res.data.data)
    //   .catch(err => console.log(err))
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
