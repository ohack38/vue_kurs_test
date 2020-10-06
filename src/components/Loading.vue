<template>
    <svg id="loading-svg" class="progress-ring" width="240" height="240">
      
      <linearGradient id="linear">
        <stop offset="25%" stop-color="#ffffff" stop-opacity="1"/>
         <stop offset="50%" stop-color="#ffffff" stop-opacity=".75"/>
         <stop offset="65%" stop-color="#ffffff" stop-opacity=".5"/>
         <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
      </linearGradient>

        <circle
          class="progress-ring_circle"
          stroke="url(#linear)"
          stroke-width="7"
          fill="transparent"
          r="60"
          cx="120"
          cy="120"/>       

        <animateTransform 
          attributeName="transform" 
          attributeType="XML" 
          type="rotate"
          dur="2s" 
          from="0 0 0"
          to="360 0 0" 
          repeatCount="indefinite" />
      </svg>
</template>

<script>
export default {
    name: 'Loading'
}
</script>