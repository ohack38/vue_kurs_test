<template>
<div>
    <div v-for="activity in activities" :key="activity.id">
        <ActivityItem :activity="activity" />
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