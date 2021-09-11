<template>
  <div class="divide">
    <Icon icon="fa-solid:cut" class="divide-icon" />
    <hr />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'

export default defineComponent({
  components: {
    Icon
  },
  setup() {}
})
</script>

<style scoped>
.divide {
  @apply text-blue-500 font-semibold pt-5 pb-5 items-center relative cursor-pointer select-none;

  font-size: 22px;
}

.divide hr {
  @apply border-2 border-dashed border-blue-500;

  margin: 0 auto;
}

.divide .divide-icon {
  z-index: 1;
  position: absolute;
  top: 11px;
  left: 14px;
  transition: all 1s ease-in-out;
}

.divide:hover .divide-icon {
  left: calc(100% - 30px);
}
</style>
