import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as utils from '@/config/utils.js'
const app = createApp(App)

app.config.globalProperties.utils = utils
app.use(store).use(router).mount('#app')
