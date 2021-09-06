<template>
  <nav class="header">
    <Logo></Logo>
    <div class="flex items-center">
      <Search></Search>
      <div class="hidden md:block">
        <Menu></Menu>
      </div>
      <Toggle />
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'
import Logo from './components/Logo.vue'
import Menu from './components/Menu.vue'
import Search from './components/Search.vue'
import Toggle from './components/Toggle.vue'

export default defineComponent({
  components: {
    Icon,
    Logo,
    Menu,
    Search,
    Toggle
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.header {
  @apply h-16 pl-8 pr-8 bg-white flex items-center shadow-md w-screen justify-between;
}
</style>
