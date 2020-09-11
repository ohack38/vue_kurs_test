<template>
    <div v-if="place">
        <h3>{{place.name.fi}}</h3>
        
        <a :href="place.info_url">{{place.info_url}}</a>
        <button>Participate</button>
        <button>Interested</button>
        <p>{{place.description.body}}</p>
        
    </div>
    <p v-else> loading.....</p>
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