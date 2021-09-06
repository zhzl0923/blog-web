<template>
  <div class="menu">
    <router-link
      :class="{ 'menu-item': true, active: path === menu.path }"
      :to="menu.path"
      :key="index"
      v-for="(menu, index) in menus"
    >
      <span>
        <Icon :icon="menu.meta.icon" />
      </span>
      <span>{{ menu.meta.title }}</span>
    </router-link>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from 'vue'
  import { Icon } from '@iconify/vue'
  import { useRoute } from 'vue-router'
  import { routes } from '@/routes'

  export default defineComponent({
    components: {
      Icon
    },
    setup() {
      const route = useRoute()
      const path = ref(route.path)
      watch(
        () => route.path,
        (p) => (path.value = p)
      )
      const menus = routes[0].children
      return { path, menus }
    }
  })
</script>

<style scoped>
  .menu {
    @apply flex items-center;
  }

  .menu .menu-item {
    @apply pl-4 pr-4 h-16 box-border font-medium;
    @apply text-gray-700 flex items-center space-x-1 flex-shrink-0;

    border-bottom: 3px solid transparent;
  }

  .menu .menu-item:hover {
    @apply bg-gray-200;
  }

  .menu .menu-item span {
    @apply text-gray-700 font-medium text-sm;
  }

  .menu .active {
    @apply text-blue-500;

    border-bottom: 3px solid #3b82f6;
  }

  .menu .active span {
    @apply text-blue-500;
  }
</style>
