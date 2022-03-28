<template>
  <div class="container">
    <h1>Vite - Vue2 - SASS - Vitest - Script Setup</h1>
    <RandomText value="Oh yeah" />
  </div>
</template>

<script>
import RandomText from './components/Text/Text.vue'
  export default {
    name: 'ViteVue2',
    components: {
      RandomText
    }
  }
</script>

<style lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
}
</style>