<template>
  <div v-if="event" class="eventtype">
    <a :href="event.info_url">
      <h3>{{event.name.fi}}</h3> 
    </a>
    <div v-html="event.description.body"></div>
    <button>Participate</button>
    <button>Interested</button>
    <img loading=lazy class="thumbnail" :src="event.description.images[0].url">
        
      
        
    </div>
  <p v-else>loading.....</p>
</template>

<script>
export default {
  name: "EventItem",
  props: ["event"],
}
</script>

<style scoped>
button {
  background-color: #44a6be;
  color: white;
  border-radius: 100px 100px;
  padding: 10px 20px;
  margin: 20px;
  border: none;
}
</style>