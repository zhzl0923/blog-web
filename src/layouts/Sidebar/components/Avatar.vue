<template>
  <div class="avatar">
    <Avatar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Avatar } from '@components/Avatar'

export default defineComponent({
  components: {
    Avatar
  },
  setup() {}
})
</script>

<style scoped>
.avatar {
  @apply flex items-center justify-center pl-4 pr-4 pt-4 pb-4 cursor-pointer select-none;
}
</style>