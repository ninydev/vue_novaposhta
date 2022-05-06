import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue3 from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'vue-toast-notification/dist/theme-sugar.css'

import { createI18n } from 'vue-i18n'
import ruLocaleMessages from '@/locales/ru.json'
import uaLocaleMessages from '@/locales/ua.json'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'ua',
  fallbackLocale: 'ru',
  messages: { ru: ruLocaleMessages, ua: uaLocaleMessages } // the new change
})

createApp(App)
  .use(i18n)
  .use(BootstrapVue3)
  .use(store)
  .use(router)
  .mount('#app')
