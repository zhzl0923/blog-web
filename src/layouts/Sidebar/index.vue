<template>
  <teleport to="body">
    <div class="sidebar">
      <div
        :class="{
          mask: true,
          animate__animated: true,
          animate__fadeIn: isShow,
          animate__fadeOut: !isShow,
          hidden: hidden
        }"
        @click="closeSidebar"
      ></div>
      <div :class="{ modal: true, open: isShow }">
        <Avatar />
        <site-data :closeSidebar="closeSidebar" />
        <Divide />
        <Menus />
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Icon } from '@iconify/vue'
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
    const isShow = ref(false)
    const hidden = ref(true)

    const openSidebar = () => {
      hidden.value = false
      isShow.value = true
    }

    const closeSidebar = () => {
      isShow.value = false
      setTimeout(() => {
        hidden.value = true
      }, 800)
    }
    return { isShow, hidden, openSidebar, closeSidebar }
  }
})
</script>

<style scoped>
.sidebar {
  @apply absolute top-0 left-0 md:hidden;
}

.sidebar .mask {
  @apply absolute w-screen h-screen bg-black bg-opacity-60;
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