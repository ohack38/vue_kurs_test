<template>
  <div v-if="event" class="eventtype">
    <a :href="event.info_url">
      <h3>{{event.name.fi}}</h3> 
    </a>
    <div v-html="event.description.body"></div>
    <button 
      @click="participate = !participate; " v-bind:class="participate ? 'clickedColor' : 'defaultColor'"> 
      <a :href="event.info_url" target="_blank">
        <p>Participate</p>
      </a>
    </button>
    <button @click="$emit('add-event', event.id, event.name.fi,  event.description.body, event.info_url ); 
      interested = !interested" v-show="!interested" v-bind:class="interested ? 'clickedColor' : 'defaultColor'">
      Interested
    </button>
    <button @click="$emit('del-event', event.id); interested = !interested" v-show="interested">Not interested?</button>
    <img  v-if="event.description.images[0]" loading=lazy class="thumbnail" :src="event.description.images[0].url">

  </div>
  <p v-else>loading.....</p>
</template>

<script>
export default {
  name: "EventItem",
  props: ["event"],
  data(){
    return{
      participate: false,
      interested: false
    }
  }
}
</script>

<style scoped>
button {
  border-radius: 100px 100px;
  padding: 10px 20px;
  margin: 20px;
  border: none;
  cursor: pointer;
}
a{
  text-decoration: none;
  color: inherit;
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

