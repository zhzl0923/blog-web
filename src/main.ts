import { createApp } from 'vue'
import App from '@/App.vue'
import "animate.css"
import 'element-plus/dist/index.css'
import "@assets/css/index.css"
import { setupRouter } from '@/routes'
import { setupStore } from '@/store'



const app = createApp(App)
setupStore(app)
setupRouter(app)
app.mount('#app')
