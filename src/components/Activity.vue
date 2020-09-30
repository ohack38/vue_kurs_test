<template>
<div>
    <div v-for="activity in activities" :key="activity.id">
        <ActivityItem :activity="activity" v-on:add-part="$emit('add-part', activity.id, activity.name.fi, activity.where_when_duration.where_and_when, activity.description.body)"/>
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