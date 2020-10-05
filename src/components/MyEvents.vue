<template>
    <div>
        <div v-for="eventItem in eventItems" :key="eventItem.id">
            <MyEventsItem :eventItem="eventItem"/>
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