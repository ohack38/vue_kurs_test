<template>
    <div v-if="eventItem" class="eventtype">
        <a :href="eventItem.url">
            <h3>{{eventItem.name}}</h3>
        </a>
        <div v-html="eventItem.when_where"></div>
        <div v-html="eventItem.decription"></div>
        <button @click="$emit('del-event', eventItem.id)">Not interested?</button>
    </div>
</template>

<script>
export default {
    name: 'MyEventsItem',
    props: ['eventItem']
}
</script>

<style scoped>
    button {
        border-radius: 100px 100px;
        padding: 10px 20px;
        margin: 20px;
        border: none;
        cursor: pointer;
        background-color: #42b983;
        color: white;
    }
</style>