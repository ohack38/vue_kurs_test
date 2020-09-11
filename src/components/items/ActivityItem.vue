<template>
    <div v-if="activity">
        <h3>{{activity.name.fi}}</h3>
        <h5>{{activity.where_when_duration.where_when}}</h5>
        <a :href="activity.info_url">{{activity.info_url}}</a>
        <button>Participate</button>
        <button>Interested</button>
        <p>{{activity.description.body}}</p>
        
    </div>
    <p v-else> loading.....</p>
</template>

<script>

export default {
    name: 'ActivityItem',
    props: ['activity']
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