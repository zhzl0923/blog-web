<template>
  <div class="w-screen h-screen overflow-y-auto">
    <ElScrollbar>
      <router-view></router-view>
    </ElScrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElScrollbar } from 'element-plus'

export default defineComponent({
  components: {
    ElScrollbar
  },
  setup() {
    return {}
  }
})
</script>

