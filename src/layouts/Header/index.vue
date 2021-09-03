<template>
  <div class="header">
    <Logo />
    <Menu />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logo from '@layouts/Header/components/Logo.vue'
import Menu from '@layouts/Header/components/Menu.vue'

export default defineComponent({
  components: {
    Logo,
    Menu
  },
  setup() {}
})
</script>

<style scoped>
.header {
  @apply h-16 flex items-center shadow bg-white;
}
</style>
