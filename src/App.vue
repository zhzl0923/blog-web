<template>
  <div class="app-container">
    <el-scrollbar>
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

export default defineComponent({
  components: {
    ElScrollbar,
    ElBacktop,
    Icon
  },
  setup() {
    return {}
  }
})
</script>
<style scoped>
.app-container {
  @apply w-screen h-screen overflow-y-auto overscroll-x-none;
}
</style>

