<template>
  <div class="app-container">
    <el-scrollbar @scroll="scroll">
      <router-view></router-view>
    </el-scrollbar>
    <el-backtop right="15" target=".el-scrollbar__wrap">
      <Icon icon="fa-solid:arrow-up" />
    </el-backtop>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElScrollbar, ElBacktop } from 'element-plus'
import { Icon } from '@iconify/vue'

interface scrollProps {
  scrollTop: number
  scrollRight: number
}
export default defineComponent({
  components: {
    ElScrollbar,
    ElBacktop,
    Icon
  },
  setup() {
    const scroll = (props: scrollProps) => {
      console.log(props)
    }
    return { scroll }
  }
})
</script>
<style scoped>
.app-container {
  @apply w-screen h-screen overflow-y-auto overscroll-x-none;
}
</style>

