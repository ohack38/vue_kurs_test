<template>
  <div id="myevents">
      <MyEvents :eventItems="eventItems" v-on:del-event="deleteEvent"/>
  </div>
</template>

<script>

import MyEvents from '../components/MyEvents'

export default {
  name: 'MyEventsView',
  components:{
    MyEvents
  },
  data(){
    return{
      eventItems: []
    }
  },
  methods:{
    deleteEvent(id){
      this.eventItems = JSON.parse(localStorage.getItem('storage'))
      this.eventItems = this.eventItems.filter(event => event.id !== id); 
      localStorage.setItem('storage', JSON.stringify(this.eventItems))
      
    }
  },
  mounted(){
    if(localStorage.getItem('storage')){
      this.eventItems = JSON.parse(localStorage.getItem('storage'))
    }
  }
}
</script>