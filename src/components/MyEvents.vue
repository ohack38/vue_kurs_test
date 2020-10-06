<template>
    <div>
        <div v-for="eventItem in eventItems" :key="eventItem.id">
            <MyEventsItem :eventItem="eventItem" v-on:del-event="$emit('del-event', eventItem.id)"/>
        </div>
    </div>
</template>

<script>

import MyEventsItem from './items/MyEventsItem'

export default {
    name: 'MyEvents',
    props: ['eventItems'],
    components:{
        MyEventsItem
    }
}
</script>