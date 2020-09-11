<template>
  <div v-if="activity" class="eventtype">
    <a :href="activity.info_url"><h3>{{activity.name.fi}}</h3></a>

    <h5>{{activity.where_when_duration.where_and_when}}</h5>
    <div v-html="activity.description.body"></div>
    <button>Participate</button>
    <button>Interested</button>
  </div>
  <p v-else>loading.....</p>
</template>

<script>
export default {
  name: "ActivityItem",
  props: ["activity"],
};
</script>

<style scoped>
button {
  background-color: #42b983;
  color: white;
  border-radius: 100px 100px;
  padding: 10px 20px;
  margin: 20px;
  border: none;
}
</style>