<template>
  <div v-if="event" class="eventtype">
    <a :href="event.info_url">
      <h3>{{event.name.fi}}</h3>
    </a>

    <h5 class="timer">{{event.where_when_duration.where_and_when}}</h5>
    <div v-html="event.description.body"></div>
    <button>Join Event</button>
    <button>Interested</button>


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