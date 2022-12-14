import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router'

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'

import 'primeflex/primeflex.min.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(PrimeVue)
app.use(router)

app.component('Button', Button)

app.mount('#app')
