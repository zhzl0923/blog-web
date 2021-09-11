<template>
  <div class="avatar">
    <img :style="{ width: width, height: height }" src="@assets/images/avatar.jpg" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    width: {
      type: String,
      default: '7rem'
    },
    height: {
      type: String,
      default: '7rem'
    }
  },
  setup() {}
})
</script>

<style scoped>
.avatar {
  @apply flex items-center justify-center pl-4 pr-4 pt-4 pb-4 cursor-pointer select-none;
}

.avatar img {
  @apply rounded-full cursor-pointer select-none;

  transition: all 0.5s;
}

.avatar img:hover {
  transform: rotate(360deg);
}
</style>