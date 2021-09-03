<template>
  <Header />

  <Main />

  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Header } from '@/layouts/Header'
import { Main } from '@/layouts/Main'
import { Footer } from '@/layouts/Footer'

export default defineComponent({
  components: {
    Header,
    Main,
    Footer
  },
  setup() {
    return {}
  }
})
</script>