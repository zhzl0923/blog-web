<template>
  <teleport to="body">
    <div :class="{ modal: true, hidden: hidden }">
      <div
        :class="{
          'modal-mask': true,
          animate__animated: true,
          animate__fadeIn: true,
          animate__fadeOut: !isShow
        }"
        @click="closeModal"
      ></div>
      <div
        :class="{
          'modal-content': true,
          animate__animated: true,
          animate__fadeIn: true,
          animate__fadeOut: !isShow
        }"
      >
        <div class="modal-title">
          <div class="font-light text-blue-500 select-none">{{ title }}</div>
          <div class="flex iterm-center">
            <button class="text-gray-400" @click="closeModal">
              <Icon icon="fa-solid:times" />
            </button>
          </div>
        </div>
        <slot></slot>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Icon } from '@iconify/vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '本地搜索'
    }
  },
  components: {
    Icon
  },
  setup() {
    const isShow = ref(false)
    const hidden = ref(true)
    const closeModal = () => {
      isShow.value = false
      setTimeout(() => {
        hidden.value = true
      }, 800)
    }

    const openModal = () => {
      hidden.value = false
      isShow.value = true
    }

    return { isShow, hidden, closeModal, openModal }
  }
})
</script>

<style scoped>
.modal {
  @apply fixed left-0 top-0 z-30;
}

.modal .modal-mask {
  @apply w-screen h-screen bg-black bg-opacity-60;
}

.modal .modal-content {
  @apply fixed z-40 bg-white top-32 rounded-md p-5 overflow-hidden;

  width: 30rem;
  max-height: 40rem;
  left: calc((100% - 30rem) / 2);
}

.modal .modal-title {
  @apply flex justify-between items-center;

  font-size: 1.4rem;
}
</style>
