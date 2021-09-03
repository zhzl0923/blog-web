import { createApp } from 'vue'
import App from '@/App.vue'
import "@assets/css/index.css"
import { setupRouter } from '@/routes'
import { setupStore } from '@/store'


const app = createApp(App)
setupStore(app)
setupRouter(app)
app.mount('#app')
