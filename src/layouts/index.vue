<template>
  <Header />
  <Sidebar />
  <Main />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Header } from '@/layouts/Header'
import { Main } from '@/layouts/Main'
import { Footer } from '@/layouts/Footer'
import { Sidebar } from '@layouts/Sidebar'

export default defineComponent({
  components: {
    Header,
    Sidebar,
    Main,
    Footer
  },
  setup() {
    return {}
  }
})
</script>
