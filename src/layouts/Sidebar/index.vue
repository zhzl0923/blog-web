<template>
  <teleport to="body">
    <div :class="{ sidebar: true, hidden: hidden }">
      <div :class="{ mask: true, hidden: hidden }" @click="maskClick"></div>
      <div :class="{ modal: true, hidden: hidden }">
        <Avatar />
        <site-data />
        <Divide />
        <Menus />
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'
import { useSidebarStore } from '@store/modules/sidebar'
import { storeToRefs } from 'pinia'
import Avatar from './components/Avatar.vue'
import Menus from './components/Menus.vue'
import SiteData from './components/SiteData.vue'
import { Divide } from '@components/Divide'

export default defineComponent({
  components: {
    Icon,
    Avatar,
    Menus,
    SiteData,
    Divide
  },
  setup() {
    const store = useSidebarStore()
    const { hidden } = storeToRefs(store)
    const maskClick = () => {
      store.updateHiddenStatus()
    }
    return { hidden: hidden, maskClick }
  }
})
</script>

<style scoped>
.sidebar {
  @apply fixed top-0 left-0 z-10 flex md:hidden;
}

.sidebar .mask {
  @apply h-screen fixed top-0 left-0 md:hidden;

  width: calc(100vw - 300px);
  background-color: rgba(0, 0, 0, 0.5);
}

.sidebar .modal {
  @apply h-screen bg-white fixed top-0 right-0 md:hidden;

  width: 300px;
}
</style>