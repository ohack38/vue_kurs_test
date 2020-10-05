<template>
    <div v-if="eventItem" class="eventtype">
        <a :href="eventItem.url">
            <h3>{{eventItem.name}}</h3>
        </a>
        <h5 class='timer'>{{eventItem.when_where}}</h5>
        <div v-html="eventItem.decription"></div>
    </div>
</template>

<script>
export default {
    name: 'MyEventsItem',
    props: ['eventItem']
}
</script>