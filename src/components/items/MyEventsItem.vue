<template>
    <div v-if="eventItem" class="eventtype">
        <a :href="eventItem.url">
            <h3>{{eventItem.name}}</h3>
        </a>
        <div v-html="eventItem.when_where"></div>
        <div v-html="eventItem.decription"></div>
    </div>
</template>

<script>
export default {
    name: 'MyEventsItem',
    props: ['eventItem']
}
</script>