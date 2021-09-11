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
  @apply space-y-4 mt-6 select-none;
}

.sitebar-menus .sitebar-menu {
  @apply flex items-center  space-x-8 rounded select-none;
  @apply pl-4 pr-4 pt-2 pb-2 ml-4 mr-4 cursor-pointer;
  @apply text-gray-700 text-lg font-medium;
  @apply hover:bg-blue-500 hover:text-white;
}
</style>
