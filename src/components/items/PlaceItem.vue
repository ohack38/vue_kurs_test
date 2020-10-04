<template>
  <div v-if="place" class="eventtype">
    <a :href="place.info_url">
      <h3>{{place.name.fi}}</h3> 
    </a>
    <div v-html="place.description.body"></div>
    <img  v-if="place.description.images[0]" loading=lazy class="thumbnail" :src="place.description.images[0].url">

  </div>
  <p v-else>loading.....</p>
</template>

<script>

export default {
    name: 'PlaceItem',
    props: ['place']
}
</script>

<style scoped>
 button{
    background-color: #42b983;
    color: white;
    border-radius:  100px 100px ;
    padding: 10px 20px;
    margin: 20px;
    border: none;
 }
</style>