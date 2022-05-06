<template>
  <div class="about">
    <h1>{{t('mainMenu.about')}}</h1>
  </div>
</template>
<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'SetLocales',
  setup () {
    const { t } = useI18n({ useScope: 'global' })
    return { t }
  }
}
</script>
