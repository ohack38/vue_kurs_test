<template>
<div>
    <div v-for="activity in activities" :key="activity.id">
        <ActivityItem :activity="activity" v-on:add-part="$emit('add-part', activity.id)"/>
    </div>
</div>
    
</template>

<script>

import ActivityItem from './items/ActivityItem'

export default {
    name: 'Activity',
    props: ['activities'],
    components: {
        ActivityItem
    }
}
</script>