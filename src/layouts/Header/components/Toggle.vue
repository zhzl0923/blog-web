<template>
  <div @click="openSidebar" class="toggle">
    <span>
      <Icon icon="fa-solid:bars" />
    </span>
  </div>
</template>

 <script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'
import { useSidebarStore } from '@store/modules/sidebar'

export default defineComponent({
  components: {
    Icon
  },
  setup() {
    const store = useSidebarStore()
    const openSidebar = () => {
      store.updateHiddenStatus()
    }
    return { openSidebar }
  }
})
</script>
 
 <style scoped>
.toggle {
  @apply p-2  cursor-pointer md:hidden;

  line-height: 4rem;
}

.toggle:hover span {
  color: #3b82f6;
}

.toggle span {
  @apply text-lg text-gray-700 font-light;
}
</style>