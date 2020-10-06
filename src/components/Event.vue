<template>
<div>
    <div v-for="event in events" :key="event.id">
        <EventItem :event="event" v-on:del-event="$emit('del-event', event.id)" v-on:add-event="$emit('add-event', event.id, event.name.fi,  event.description.body, event.info_url)"/>
    </div>
</div>
    
</template>

<script>

import EventItem from './items/EventItem'

export default {
    name: 'Event',
    props: ['events'],
    components: {
        EventItem
    }
}
</script>