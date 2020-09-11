<template>
<div>
    <div v-for="place in places" :key="place.id">
        <PlaceItem :place="place" />
    </div>
</div>
    
</template>

<script>

import PlaceItem from './items/PlaceItem'

export default {
    name: 'Place',
    props: ['places'],
    components: {
        PlaceItem
    }
}
</script>