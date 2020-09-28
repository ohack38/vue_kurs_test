<template>
  <div v-if="activity" class="eventtype">
    <a :href="activity.info_url">
      <h3>{{activity.name.fi}}</h3>
    </a>

    <h5 class="timer">{{activity.where_when_duration.where_and_when}}</h5>
    <div v-html="activity.description.body"></div>
    
    <button 
        @click="$emit('add-part', activity.id); participate = !participate"
        v-bind:class="participate ? 'clickedColor' : 'defaultColor'" 
      >Participate</button>

    <button @click='myMethod(); interested = !interested' v-bind:class="interested ? 'clickedColor' : 'defaultColor'">Interested</button>
    <img loading=lazy class="thumbnail" :src="activity.description.images[0].url">
  </div>
  <p v-else>loading.....</p>
</template>

<script>
export default {
  name: "ActivityItem",
  props: ["activity"],
  data(){
    return {
      participate: false,
      interested: false
    }
  },
  methods:{
    myMethod(){
      alert('sup')
    },

  },
  
};
</script>

<style scoped>
button {
  border-radius: 100px 100px;
  padding: 10px 20px;
  margin: 20px;
  border: none;
}
.defaultColor{
  background-color: #42b983;
  color: white;
}
.clickedColor{
  background-color: #707271;
  color: white;
}
</style>