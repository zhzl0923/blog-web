<template>
  <nav class="header">
    <div class="container">
      <Logo></Logo>
      <div class="flex items-center">
        <Search></Search>
        <div class="hidden md:block">
          <Menu></Menu>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'
import Logo from './components/Logo.vue'
import Menu from './components/Menu.vue'
import Search from './components/Search.vue'

export default defineComponent({
  components: {
    Icon,
    Logo,
    Menu,
    Search
  },
  setup() {
    return {}
  }
})
</script>
