<template>
<div>
    <div v-for="event in events" :key="event.id">
        <EventItem :event="event" />
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