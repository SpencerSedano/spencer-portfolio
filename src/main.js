import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/style.css'

createApp(App).use(router).mount('#app')

//const app = createApp(App)
//const home = createApp(Home)


//home.mount('#home')
//app.mount('#app')