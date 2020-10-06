<template>
  <div v-if="activity" class="eventtype">
    <a :href="activity.info_url">
      <h3>{{activity.name.fi}}</h3>
    </a>

    <h5 class="timer">{{activity.where_when_duration.where_and_when}}</h5>
    <div v-html="activity.description.body"></div>
    
    <button 
      @click="participate = !participate; "
      v-bind:class="participate ? 'clickedColor' : 'defaultColor'" 
      >
      <a :href="activity.info_url" target="_blank">
        <p>Participate</p>
      </a>
    </button>

    <!-- toggle button beroende på interest -->
    <!-- add interest-->
    <button @click="$emit('add-event', activity.id, activity.name.fi, activity.where_when_duration.where_and_when, activity.description.body, activity.info_url ); 
      interested = !interested" v-show="!interested">Interested</button>

    <!-- delete button-->
    <button @click="$emit('del-event', activity.id); interested = !interested" v-show="interested">Not interested?</button>
    
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
  
};
</script>

<style scoped>
button {
  border-radius: 100px 100px;
  padding: 10px 20px;
  margin: 20px;
  border: none;
  cursor: pointer;
}
.defaultColor{
  background-color: #42b983;
  color: white;
}
.clickedColor{
  background-color: #707271;
  color: white;
}
a{
  text-decoration: none;
  color: white;

}

</style>