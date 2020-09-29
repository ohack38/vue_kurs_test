<template>
  <div v-if="event" class="eventtype">
        <h3>{{event.name.fi}}</h3>
        
        <a :href="event.info_url">{{event.info_url}}</a><br>
        <button>Participate</button>
        <button>Interested</button>
        <p>{{event.description.body}}</p>
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