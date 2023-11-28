import './assets/styles/index.css'
import { createApp } from 'vue'
import 'vuetify/styles'
import { createVuetify } from "vuetify";
import App from './App.vue'
import router from './router'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App)

app.use(vuetify)
app.use(router)

app.mount('#app')
