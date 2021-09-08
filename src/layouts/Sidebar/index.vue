<template>
  <teleport to="body">
    <div class="sidebar">
      <div
        :class="{
          mask: true,
          animate__animated: true,
          animate__fadeIn: true,
          animate__fadeOut: hidden,
          hidden: hidden
        }"
        @click="maskClick"
      ></div>
      <div :class="{ modal: true, open: !hidden }">
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
  @apply fixed top-0 left-0 z-10 md:hidden;
}

.sidebar .mask {
  @apply w-screen h-screen bg-black bg-opacity-60;

  transition: all ease-in-out 0.5s;
}

.sidebar .modal {
  @apply z-20 h-screen bg-white fixed top-0;

  right: -300px;
  width: 300px;
  transition: all ease-in-out 0.5s;
}

.open {
  transform: translate3d(-100%, 0, 0);
}
</style>