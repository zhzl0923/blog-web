<template>
  <div class="sitebar-menus">
    <router-link v-for="(menu, index) in menus" :key="index" :to="menu.path" class="sitebar-menu">
      <span class="w-6">
        <Icon :icon="menu.meta.icon" />
      </span>
      <span>{{ menu.meta.title }}</span>
    </router-link>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import { routes } from '@/routes'
  import { Icon } from '@iconify/vue'

  export default defineComponent({
    components: {
      Icon
    },
    setup() {
      const menus = routes[0].children
      return { menus }
    }
  })
</script>

<style scoped>
  .sitebar-menus {
    @apply space-y-4 mt-6;
  }

  .sitebar-menus .sitebar-menu {
    @apply flex items-center  space-x-8;
    @apply pl-4 pr-4 pt-2 pb-2 ml-4 mr-4 cursor-pointer;
  }

  .sitebar-menus .sitebar-menu:hover {
    @apply bg-blue-300;
  }

  .sitebar-menus .sitebar-menu span {
    @apply text-lg font-medium text-gray-700;
  }
</style>
